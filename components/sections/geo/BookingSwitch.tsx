"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import LeadForm from "@/components/ui/LeadForm";

// The two doors of the offer (Copy Standard 1.2), sharing one column.
//
// Default state is the form, because that is the lower-commitment door and the
// one a reader who is still deciding will take. Pressing "Book a 30-minute
// call" swaps the column to a cal.com calendar; a quiet link swaps it back.
// Both doors stay reachable at all times, which is the part of 1.2 a permanent
// replacement would break.
//
// WHY THE CALENDAR IS NOT RENDERED UNTIL IT IS ASKED FOR
// cal.com's embed is a third-party script plus a cross-origin iframe, several
// hundred KB before anyone interacts with it. These pages argue that uncounted
// third-party weight is what makes a store feel slow; the Los Angeles teardown
// prints the script and outside-service counts as the finding. Shipping an
// eager calendar to every visitor so that a small fraction can book would be
// the page contradicting its own argument. next/dynamic with ssr:false means
// the chunk is not in the initial bundle and embed.js is never requested until
// the click.
//
// WHY THE BUTTON IS STILL A LINK
// It keeps a real href to the booking page. Crawlers follow it, middle-click
// and open-in-new-tab behave, and with JS unavailable the click just navigates
// to a page that does the same job. The in-place swap is an enhancement on top
// of something that already worked, never a replacement for it.
const CalEmbed = dynamic(() => import("@/app/book-shopify-consultation/CalEmbed"), {
  ssr: false,
  loading: () => (
    <p className="bks-loading" role="status">
      Loading the calendar...
    </p>
  ),
});

export interface BookingSwitchProps {
  /** Attribution: the page the lead came from. Passed through to LeadForm. */
  landingPage: string;
  /** Real destination for the anchor, used when JS cannot take over. */
  bookingPath: string;
  /** Distinct per page instance so two calendars never share cal.com state. */
  calNamespace: string;
  /** Copy rendered above the button, and below it. Both are server-rendered in
   *  ConversionBlock and passed in, so the prose never enters this bundle. */
  above: ReactNode;
  below: ReactNode;
}

export default function BookingSwitch({
  landingPage,
  bookingPath,
  calNamespace,
  above,
  below,
}: BookingSwitchProps) {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="gp-inner gcb-grid">
      <div className="gcb-copy">
        {above}

      <div className="gcb-doors">
        <Link
          href={bookingPath}
          className="gcb-book"
          aria-expanded={showCalendar}
          aria-controls="gcb-door-panel"
          onClick={(e) => {
            // Let the browser do its normal thing for modified clicks: new tab,
            // new window, download, and any non-primary button.
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
            e.preventDefault();
            setShowCalendar(true);
          }}
        >
          {showCalendar ? "Pick a time below" : "Book a 30-minute call"}
          <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden>
            <path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

        {below}
      </div>

      {/* The panel the button controls: the grid's second column on desktop,
          directly under the copy on mobile. It is a sibling of .gcb-copy rather
          than a child, which is what the two-column grid expects. */}
      <div className="gcb-form" id="gcb-door-panel">
        {showCalendar ? (
          <div className="bks-cal">
            {/* No "or leave your details instead" link under the calendar. It was
                removed on the owner's instruction (2026-09-04) as visual clutter
                under an already busy widget. The consequence is that the form is
                not reachable again without a reload; the button above is the
                obvious place to put a toggle if that turns out to matter. */}
            <CalEmbed namespace={calNamespace} elementId={`${calNamespace}-cal`} />
          </div>
        ) : (
          <LeadForm landingPage={landingPage} submitLabel="Send my details" />
        )}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .bks-loading { font-size: 14px; color: #64748b; margin: 0; padding: 40px 0; text-align: center; }
          .bks-cal { background: #fff; border: 1px solid rgba(0,0,0,.10); border-radius: 16px; padding: 12px; }
          /* Height is reserved on the WRAP, not the inline target, so the panel
             does not collapse while the placeholder is showing and does not jump
             when the iframe replaces it. */
          .bks-cal .bkc-cal-wrap { min-height: 560px; }
          .bks-cal .bkc-cal-inline { width: 100%; }
          .bks-cal .bkc-cal-inline iframe { width: 100% !important; }
          /* CalEmbed unmounts this once cal.com reports the embed ready, so it
             needs no rule to hide it. It is centered in the reserved space in
             the meantime. */
          .bks-cal .bkc-cal-loading { display: block; font-size: 14px; color: #64748b; text-align: center; padding: 40px 0; }
          .bks-cal .bkc-cal-failed { font-size: 14px; line-height: 1.6; color: #334155; text-align: center; padding: 40px 16px; margin: 0; }
          @media (max-width: 640px) { .bks-cal { padding: 8px; } .bks-cal .bkc-cal-inline { min-height: 520px; } }
        `,
        }}
      />
    </div>
  );
}
