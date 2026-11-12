/** ACR owns lead delivery and team notifications. Call once after validation. */
export function submitAcrLead(values: Record<string, unknown>, formId: string) {
  const tracker = (window as Window & { acrTracker?: {trackLead: (data: Record<string, unknown>) => void} }).acrTracker;
  if (!tracker?.trackLead) throw new Error('The request service is still loading. Please try again in a moment.');
  const payload = {...values};
  delete payload.website_url;
  const first = String(payload.firstName || payload.first_name || '').trim();
  const last = String(payload.lastName || payload.last_name || '').trim();
  const name = String(payload.name || payload.fullName || [first,last].filter(Boolean).join(' ')).trim();
  const phone = String(payload.phone || '').trim();
  const country = String(payload.phone_country || payload.countryCode || '').trim();
  tracker.trackLead({...payload,name,email:String(payload.email || ''),phone:phone.startsWith('+')?phone:[country==='other'?'':country,phone].filter(Boolean).join(' '),source:formId,formId});
}
