import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function isPrivateIp(hostname) {
  if (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '0.0.0.0' ||
    hostname.endsWith('.local') ||
    hostname.endsWith('.internal')
  ) {
    return true;
  }
  const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  const match = hostname.match(ipv4Regex);
  if (match) {
    const [, a, b] = match.map(Number);
    if (a === 10) return true;
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 192 && b === 168) return true;
    if (a === 169 && b === 254) return true; // Link-local / AWS metadata protection
  }
  return false;
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { url } = body;

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Valid URL is required.' }, { status: 400 });
    }

    let parsedUrl;
    try {
      parsedUrl = new URL(url.trim());
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format. Please enter a valid URL starting with https:// or http://' },
        { status: 400 }
      );
    }

    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      return NextResponse.json({ error: 'Only HTTP and HTTPS protocols are supported.' }, { status: 400 });
    }

    if (isPrivateIp(parsedUrl.hostname)) {
      return NextResponse.json(
        { error: 'Scanning private IP addresses or internal networks is not permitted.' },
        { status: 400 }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(parsedUrl.href, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 AccessLab/1.0',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Target server returned HTTP ${response.status} (${response.statusText})` },
        { status: 400 }
      );
    }

    const contentType = response.headers.get('content-type') || '';
    if (
      !contentType.includes('text/html') &&
      !contentType.includes('application/xhtml+xml') &&
      !contentType.includes('text/plain')
    ) {
      return NextResponse.json(
        { error: `Target URL did not return HTML content (Received: ${contentType})` },
        { status: 400 }
      );
    }

    let html = await response.text();

    // Inject base href tag if not present so relative CSS/images resolve to original site
    if (html.includes('<head>')) {
      html = html.replace('<head>', `<head><base href="${parsedUrl.href}">`);
    } else if (html.includes('<HEAD>')) {
      html = html.replace('<HEAD>', `<HEAD><base href="${parsedUrl.href}">`);
    } else {
      html = `<base href="${parsedUrl.href}">${html}`;
    }

    return NextResponse.json({
      url: parsedUrl.href,
      html,
    });
  } catch (err) {
    console.error('[API /api/fetch-page Error]:', err);
    return NextResponse.json(
      {
        error:
          err.name === 'AbortError'
            ? 'Target website took too long to respond (15s timeout).'
            : err.message || 'Failed to fetch target website.',
      },
      { status: 400 }
    );
  }
}
