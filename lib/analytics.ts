export type AnalyticsEvent =
  | "booking_click"
  | "contact_submit"
  | "scorecard_start"
  | "scorecard_complete"
  | "phone_click"
  | "resource_download";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: AnalyticsEvent, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...data });
}
