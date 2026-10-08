'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

declare global { interface Window { acrTracker?: { trackLead: (payload: Record<string, FormDataEntryValue>) => void } } }

export function LeadForm({ source = 'contact-page' }: { source?: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true); setError('');
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('/api/submit-lead', { method: 'POST', body: data });
      const result = await response.json();
      if (!result.ok) { setError(result.message || 'Please check your details and try again.'); setBusy(false); return; }
      const payload = Object.fromEntries(data.entries()); delete payload.website_url;
      window.acrTracker?.trackLead({ ...payload, source });
      router.push('/thank-you');
    } catch { setError('We could not send your request. Please try again.'); setBusy(false); }
  }
  return <form className="lead-form" onSubmit={submit}>
    <label>Full name<input name="name" autoComplete="name" required /></label>
    <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
    <label>How did you hear about us?<select name="referral_source" defaultValue=""><option value="">Choose one</option><option>Search</option><option>Industry colleague</option><option>Professional group</option><option>Social</option><option>Other</option></select></label>
    <label>Tell us what needs support<textarea name="message" rows={4} /></label>
    <label className="honeypot" aria-hidden="true">Website<input name="website_url" tabIndex={-1} /></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button primary" type="submit" disabled={busy}>{busy ? 'Sending request' : 'Request your free consultation'}</button>
  </form>;
}
