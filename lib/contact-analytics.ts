export function trackContactFormWhatsAppAttempt() {
  const analyticsWindow = window as Window & {
    dataLayer?: Array<{ event: string }>;
  };

  analyticsWindow.dataLayer ??= [];
  analyticsWindow.dataLayer.push({ event: "contact_form_whatsapp_attempt" });
}
