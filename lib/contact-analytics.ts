export function trackContactFormWhatsAppAttempt() {
  const analyticsWindow = window as Window & {
    dataLayer?: Array<{ event: string }>;
  };

  analyticsWindow.dataLayer ??= [];
  // Track the handoff attempt without sending any contact-form values.
  analyticsWindow.dataLayer.push({ event: "contact_form_whatsapp_attempt" });
}
