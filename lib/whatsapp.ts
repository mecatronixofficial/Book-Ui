/**
 * Central WhatsApp helper for the whole site.
 * Every enquiry — hero CTA, a topic card, a service card, or the contact
 * form — funnels through here so the destination number and message
 * format only ever live in one place.
 */

// Replace with the real business WhatsApp number, digits only, country code first.
export const WHATSAPP_NUMBER = "12539219904";

/**
 * Open WhatsApp with a pre-filled enquiry about a specific topic or service.
 * Used by topic cards, service cards, and generic CTA buttons.
 */
export const openWhatsApp = (topic: string) => {
  const message = encodeURIComponent(
    `Hi, I would like to know more about ${topic}. Please share the details.`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
};

/**
 * Open WhatsApp with a free-form message, already composed.
 * Used by the contact form, which builds a formatted, multi-line message.
 */
export const openWhatsAppWithMessage = (message: string) => {
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

/**
 * Build the wa.me link as a plain href, for anchor tags that should still
 * work with "open in new tab" / right-click, not just onClick.
 */
export const buildWhatsAppHref = (topic: string) => {
  const message = encodeURIComponent(
    `Hi, I would like to know more about ${topic}. Please share the details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
