import { NextResponse } from 'next/server';
import { runDemoScan } from '../../../lib/scan/runDemoScan.js';
import { DEMO_ROUTES } from '../../../lib/scan/scanTypes.js';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({
    message: 'AccessLab Authorized Scan Targets',
    routes: DEMO_ROUTES,
  });
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { targetPath } = body;

    if (!targetPath) {
      return NextResponse.json(
        { error: 'Missing targetPath. Please specify an authorized demo fixture path.' },
        { status: 400 }
      );
    }

    // Determine current origin
    const host = request.headers.get('host') || '127.0.0.1:3000';
    const protocol = request.headers.get('x-forwarded-proto') || 'http';
    const baseUrl = `${protocol}://${host}`;

    const scanResult = await runDemoScan(targetPath, baseUrl);

    return NextResponse.json(scanResult);
  } catch (error) {
    console.error('[API /api/scan Error]:', error);
    return NextResponse.json(
      {
        error: error.message || 'An unexpected error occurred during the accessibility scan.',
        status: 'failed',
      },
      { status: 400 }
    );
  }
}
