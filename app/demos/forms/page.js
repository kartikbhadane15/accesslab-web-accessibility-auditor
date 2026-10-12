'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function FormsDemoContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get('mode') === 'improved' ? 'improved' : 'problem';
  const [mode, setMode] = useState(initialMode);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const urlMode = searchParams.get('mode');
    if (urlMode === 'improved' || urlMode === 'problem') {
      setMode(urlMode);
    }
  }, [searchParams]);

  const handleFakeSubmit = () => {
    setFeedback('Submit clicked! Note: In the flawed example, keyboard users cannot activate this with Enter or Space, and screen readers do not announce it as a button.');
  };

  const handleRealSubmit = (e) => {
    e.preventDefault();
    setFeedback('Form submitted successfully! Native submit handled with standard keyboard and screen reader announcements.');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Link href="/demos" className="badge badge-neutral" style={{ textDecoration: 'none' }}>
            ← Back to Demo Library
          </Link>
          <span className="badge badge-serious">Forms & Validation</span>
        </div>
        <h1>Forms Accessibility Demo</h1>
        <p style={{ maxWidth: '800px', fontSize: '1.05rem' }}>
          Compare a deliberately inaccessible registration form against a remediated, accessible implementation. Observe how automated testing detects missing labels while manual testing is necessary to confirm clear error guidance.
        </p>
      </header>

      {/* Mode Switcher */}
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Selected Fixture Mode:
          </span>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.35rem' }}>
            <button
              type="button"
              className={`btn btn-sm ${mode === 'problem' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setMode('problem')}
              aria-pressed={mode === 'problem'}
            >
              ⚠ Flawed Test Fixture
            </button>
            <button
              type="button"
              className={`btn btn-sm ${mode === 'improved' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setMode('improved')}
              aria-pressed={mode === 'improved'}
            >
              ✓ Remediated Semantic Fixture
            </button>
          </div>
        </div>

        <div>
          <Link
            href={`/dashboard?target=${encodeURIComponent(`/demos/forms?mode=${mode}`)}`}
            className="btn btn-secondary btn-sm"
          >
            Audit this fixture with axe-core →
          </Link>
        </div>
      </div>

      {feedback && (
        <div className="callout callout-info" role="status" aria-live="polite">
          <p style={{ margin: 0, fontSize: '0.9rem' }}>{feedback}</p>
        </div>
      )}

      {/* Fixture Display */}
      {mode === 'problem' ? (
        <section
          className="card"
          aria-labelledby="flawed-heading"
          style={{ border: '2px solid #ef4444', background: '#fff' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #fee2e2', paddingBottom: '0.75rem' }}>
            <div>
              <span className="badge badge-critical">Deliberately Flawed Fixture</span>
              <h2 id="flawed-heading" style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>
                Registration Form with Severe Accessibility Deficits
              </h2>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#b91c1c', fontWeight: 600 }}>
              Test Target: /demos/forms?mode=problem
            </span>
          </div>

          <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Flawed 1: No label and no placeholder attribute */}
            <div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>
                Account Username <span style={{ color: '#ef4444' }}>*</span> (No &lt;label&gt; element, no accessible name)
              </div>
              <input
                type="text"
                id="flawed-username-input"
                defaultValue=""
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                }}
              />
            </div>

            {/* Flawed 2: Unassociated error and missing label */}
            <div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>
                Corporate Email (Unassociated error message, missing &lt;label&gt;)
              </div>
              <input
                type="text"
                id="flawed-email-input"
                defaultValue="invalid-email-value"
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  border: '1px solid #ef4444',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                }}
              />
              {/* Error is just a div with no connection to the input */}
              <div style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                Please enter a valid work email address
              </div>
            </div>

            {/* Flawed 3: Password missing label */}
            <div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>
                Password (No programmatic required attribute, missing &lt;label&gt;)
              </div>
              <input
                type="password"
                id="flawed-password-input"
                defaultValue=""
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                }}
              />
            </div>

            {/* Flawed 4: Button missing discernible text */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button
                type="button"
                id="flawed-icon-btn"
                onClick={handleFakeSubmit}
                style={{
                  background: '#2563eb',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.625rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Icon Button with no accessible text (triggers <code>button-name</code>)
              </span>
            </div>

            {/* Flawed 5: Fake submit button: <div> with onClick, no keyboard support */}
            <div>
              <div
                onClick={handleFakeSubmit}
                style={{
                  display: 'inline-block',
                  background: '#475569',
                  color: '#fff',
                  padding: '0.625rem 1.25rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  userSelect: 'none',
                }}
              >
                Submit Registration (Clickable &lt;div&gt;)
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.35rem' }}>
                Try pressing <kbd>Tab</kbd> then <kbd>Enter</kbd> to submit. You will find it is impossible to focus or trigger with a keyboard.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section
          className="card"
          aria-labelledby="improved-heading"
          style={{ border: '2px solid #22c55e', background: '#fff' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #dcfce7', paddingBottom: '0.75rem' }}>
            <div>
              <span className="badge badge-minor">Remediated Semantic Fixture</span>
              <h2 id="improved-heading" style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>
                Registration Form Engineered for WCAG 2.1 & 2.2 AA Conformance
              </h2>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#15803d', fontWeight: 600 }}>
              Test Target: /demos/forms?mode=improved
            </span>
          </div>

          <form onSubmit={handleRealSubmit} noValidate style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Improved 1: Explicit label with htmlFor */}
            <div>
              <label
                htmlFor="acc-username"
                style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}
              >
                Account Username <span aria-hidden="true" style={{ color: '#dc2626' }}>*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="acc-username"
                name="username"
                type="text"
                required
                aria-required="true"
                autoComplete="username"
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  border: '1px solid #94a3b8',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                }}
              />
            </div>

            {/* Improved 2: Label + aria-describedby + role="alert" */}
            <div>
              <label
                htmlFor="acc-email"
                style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}
              >
                Corporate Email <span aria-hidden="true" style={{ color: '#dc2626' }}>*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="acc-email"
                name="email"
                type="email"
                required
                aria-required="true"
                aria-invalid="true"
                aria-describedby="email-error-msg email-hint"
                defaultValue="invalid-email-value"
                autoComplete="email"
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  border: '2px solid #dc2626',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                }}
              />
              <span id="email-hint" style={{ display: 'block', fontSize: '0.8rem', color: '#475569', marginTop: '0.25rem' }}>
                We will send an account verification link to this address.
              </span>
              <div
                id="email-error-msg"
                role="alert"
                style={{ color: '#b91c1c', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.25rem' }}
              >
                Please enter a valid work email address (e.g. name@company.com).
              </div>
            </div>

            {/* Improved 3: Password */}
            <div>
              <label
                htmlFor="acc-password"
                style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}
              >
                Password <span aria-hidden="true" style={{ color: '#dc2626' }}>*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="acc-password"
                name="password"
                type="password"
                required
                aria-required="true"
                autoComplete="new-password"
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  border: '1px solid #94a3b8',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                }}
              />
            </div>

            {/* Improved 4: Semantic button */}
            <div>
              <button type="submit" className="btn btn-primary">
                Create Verified Account
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Educational Analysis Section */}
      <section className="card" aria-labelledby="analysis-heading">
        <h2 id="analysis-heading" style={{ fontSize: '1.25rem', marginTop: 0 }}>
          Accessibility Engineering Analysis: Forms
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1rem', marginTop: 0, color: 'var(--severity-critical-text)' }}>
              1. Missing &lt;label&gt; vs. Placeholder
            </h3>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              Placeholders disappear as soon as the user starts typing, placing a severe cognitive load on users with memory impairments. Screen readers often do not announce placeholders reliably as accessible names. Use explicit <code>&lt;label for=&quot;id&quot;&gt;</code>.
            </p>
          </div>

          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1rem', marginTop: 0, color: 'var(--severity-critical-text)' }}>
              2. Clickable &lt;div&gt; vs. Native &lt;button&gt;
            </h3>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              A <code>&lt;div onClick&gt;</code> has no keyboard focusability, is omitted from the tab order, does not respond to <kbd>Enter</kbd> or <kbd>Space</kbd>, and has no accessibility role. Using a native <code>&lt;button&gt;</code> provides all keyboard and assistive technology behaviors automatically.
            </p>
          </div>

          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1rem', marginTop: 0, color: 'var(--severity-serious-text)' }}>
              3. Programmatic Error Associations
            </h3>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              Without <code>aria-describedby=&quot;error-id&quot;</code> and <code>aria-invalid=&quot;true&quot;</code>, a blind screen reader user who tabs onto an invalid input will hear only the field name without knowing it contains an error or how to correct it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function FormsDemoPage() {
  return (
    <Suspense fallback={<div className="callout callout-info">Loading Forms Demo...</div>}>
      <FormsDemoContent />
    </Suspense>
  );
}
