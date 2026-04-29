import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Leave a Review | Ecomm Wizards",
  description: "Worked with Ecomm Wizards? We'd love to hear about your experience. Leave a review and help other Shopify merchants find the right agency.",
};

export default function PublicReviewPage() {
  return (
    <>
      <PageHero
        badge="Leave a Review"
        title="Share Your Experience"
        titleHighlight="With Ecomm Wizards"
        subtitle="Your feedback helps us improve and helps other Shopify merchants make better decisions. We appreciate every review."
      />
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-slate-800">Thank You for Working With Us</h2>
            <p className="mt-3 text-slate-500">Leave your review on one of the platforms below:</p>
            <div className="mt-8 flex flex-col gap-4">
              {[
                { platform: "Google Reviews", icon: "🔵" },
                { platform: "Clutch.co",      icon: "🟠" },
                { platform: "Shopify App Store", icon: "🟢" },
              ].map((p) => (
                <div key={p.platform}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <span className="flex items-center gap-3 font-semibold text-slate-800">
                    <span className="text-2xl">{p.icon}</span>
                    {p.platform}
                  </span>
                  <span className="rounded-lg bg-slate-700 px-4 py-2 text-sm text-white">Write a Review</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-slate-500 text-sm">Not happy with something? Let us know first.</p>
              <Link href="/contact-shopify-agency" className="mt-3 inline-block btn-outline">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
