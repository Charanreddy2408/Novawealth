"use client";

import Link, { LinkProps } from "next/link";
import { track, AnalyticsEvent } from "@/lib/analytics";
import React from "react";

interface TrackedLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  trackingEvent: AnalyticsEvent;
  trackingData?: Record<string, unknown>;
  children: React.ReactNode;
}

export function TrackedLink({ trackingEvent, trackingData, children, href, ...props }: TrackedLinkProps) {
  return (
    <Link href={href} {...props} onClick={() => track(trackingEvent, trackingData)}>
      {children}
    </Link>
  );
}
