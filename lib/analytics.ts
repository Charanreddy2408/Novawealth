import { sendGAEvent } from "@next/third-parties/google";

export type AnalyticsEvent =
  | "booking_click"
  | "contact_submit"
  | "scorecard_start"
  | "scorecard_complete"
  | "phone_click"
  | "email_click"
  | "social_click"
  | "article_click"
  | "resource_download"
  | "tab_click"
  | "hero_cta_click"
  | "footer_nav_click";

export function track(event: AnalyticsEvent, data: Record<string, unknown> = {}) {
  // Use the official Next.js GA event sender
  sendGAEvent("event", event, data);
}
