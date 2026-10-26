"use client";
import { useState } from "react";

type Platform = { name: string; domain: string; imgSrc?: string; logoHeight?: number; makeBlack?: boolean };
type Tab = { label: string; platforms: Platform[] };

const TABS: Tab[] = [
  {
    label: "ERP, Accounting & CRM",
    platforms: [
      { name: "Oracle NetSuite",        domain: "netsuite.com",   imgSrc: "/images/Oracle-Netsuite.png" },
      { name: "SAP",                    domain: "sap.com",        imgSrc: "/images/SAP logo.png" },
      { name: "Microsoft Dynamics 365", domain: "microsoft.com",  imgSrc: "/images/Microsoft-Dynamics-365.png" },
      { name: "Salesforce",             domain: "salesforce.com", imgSrc: "/images/Salesforce.png", logoHeight: 52 },
      { name: "HubSpot",                domain: "hubspot.com",    imgSrc: "/images/HubSpot Logo.png" },
      { name: "Zoho",                   domain: "zoho.com",       imgSrc: "/images/Zoho.png", logoHeight: 52 },
      { name: "QuickBooks",             domain: "intuit.com",     imgSrc: "/images/QuickBooks logo.png" },
      { name: "Xero",                   domain: "xero.com",       imgSrc: "/images/Xero logo.svg", logoHeight: 52 },
      { name: "Odoo",                   domain: "odoo.com",       imgSrc: "/images/Odoo logo.png" },
      { name: "Pipedrive",              domain: "pipedrive.com",  imgSrc: "/images/Pipedrive Logo.png" },
    ],
  },
  {
    label: "Shipping, 3PL & Fulfilment",
    platforms: [
      { name: "ShipStation", domain: "shipstation.com", imgSrc: "/images/ShipStation.png" },
      { name: "ShipBob",     domain: "shipbob.com",     imgSrc: "/images/ShipBob logo.png" },
      { name: "EasyShip",    domain: "easyship.com",    imgSrc: "/images/ShippingEasy.png" },
      { name: "Shippo",      domain: "goshippo.com",    imgSrc: "/images/Shippo.png" },
      { name: "ShipHero",    domain: "shiphero.com",    imgSrc: "/images/ShipHero_Logo.png" },
      { name: "ShipperHQ",   domain: "shipperhq.com",   imgSrc: "/images/ShipperHQ.png" },
      { name: "FedEx",       domain: "fedex.com",       imgSrc: "/images/FedEx.png" },
      { name: "UPS",         domain: "ups.com",         imgSrc: "/images/UPS logo.png", logoHeight: 52 },
      { name: "DHL",         domain: "dhl.com",         imgSrc: "/images/DHL logo 1.svg", logoHeight: 52 },
      { name: "Linnworks",   domain: "linnworks.com",   imgSrc: "/images/Linnworks logo.png" },
    ],
  },
  {
    label: "Marketplaces & Sales Channels",
    platforms: [
      { name: "Amazon",          domain: "amazon.com",  imgSrc: "/images/Amazon logo.png" },
      { name: "eBay",            domain: "ebay.com",    imgSrc: "/images/ebay.png" },
      { name: "Walmart",         domain: "walmart.com", imgSrc: "/images/Wallmart.png" },
      { name: "TikTok Shop",     domain: "tiktok.com",  imgSrc: "/images/tiktokshop logo.webp", logoHeight: 52 },
      { name: "Google Shopping", domain: "google.com",  imgSrc: "/images/google.svg" },
      { name: "Etsy",            domain: "etsy.com",    imgSrc: "/images/Etsy logo.png" },
      { name: "Faire",           domain: "faire.com",   imgSrc: "/images/faire logo.png", logoHeight: 70 },
      { name: "Zalando",         domain: "zalando.com", imgSrc: "/images/Zalando Logo.png" },
      { name: "OnBuy",           domain: "onbuy.com",   imgSrc: "/images/Onbuy logo.png" },
      { name: "Fruugo",          domain: "fruugo.com",  imgSrc: "/images/fruugo logo.png" },
    ],
  },
  {
    label: "Payments & Checkout",
    platforms: [
      { name: "Stripe",        domain: "stripe.com",           imgSrc: "/images/Stripe.png" },
      { name: "PayPal",        domain: "paypal.com",           imgSrc: "/images/PayPal.png" },
      { name: "Klarna",        domain: "klarna.com",           imgSrc: "/images/Klarna Logo.png" },
      { name: "Afterpay",      domain: "afterpay.com",         imgSrc: "/images/Afterpay logo.png" },
      { name: "Adyen",         domain: "adyen.com",            imgSrc: "/images/Adyen Logo.png" },
      { name: "Authorize.Net", domain: "authorize.net",        imgSrc: "/images/Authorize.net logo.png" },
      { name: "Braintree",     domain: "braintreepayments.com",imgSrc: "/images/braintree logo.png" },
      { name: "Square",        domain: "squareup.com",         imgSrc: "/images/Square logo.png" },
      { name: "Worldpay",      domain: "worldpay.com",         imgSrc: "/images/Worldpay Logo.png" },
      { name: "Mollie",        domain: "mollie.com",           imgSrc: "/images/mollie logo.png" },
    ],
  },
  {
    label: "Marketing, Analytics & Support",
    platforms: [
      { name: "Klaviyo",        domain: "klaviyo.com",        imgSrc: "/images/klaviyo.svg",           makeBlack: true },
      { name: "Mailchimp",      domain: "mailchimp.com",      imgSrc: "/images/mailchimp logo.png" },
      { name: "ActiveCampaign", domain: "activecampaign.com", imgSrc: "/images/ActiveCampaign logo.png", logoHeight: 70 },
      { name: "Omnisend",       domain: "omnisend.com",       imgSrc: "/images/omnisend logo.png",       logoHeight: 70 },
      { name: "Triple Whale",   domain: "triplewhale.com",    imgSrc: "/images/triple-whale.svg",      makeBlack: true },
      { name: "Northbeam",      domain: "northbeam.io",       imgSrc: "/images/Northbeam logo.webp", logoHeight: 52 },
      { name: "Gorgias",        domain: "gorgias.com",        imgSrc: "/images/Gorgias Logo 1.png" },
      { name: "Zendesk",        domain: "zendesk.com",        imgSrc: "/images/zendesk logo.svg" },
      { name: "Yotpo",          domain: "yotpo.com",          imgSrc: "/images/yotpo.svg",             makeBlack: true },
      { name: "Attentive",      domain: "attentive.com",      imgSrc: "/images/Attentive Logo.svg" },
    ],
  },
];

function LogoCard({ platform }: { platform: Platform }) {
  const [imgError, setImgError] = useState(false);
  const src = platform.imgSrc ?? `https://logo.clearbit.com/${platform.domain}`;

  return (
    <div className="si-ig-card">
      <div className="si-ig-card-logo">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={platform.name}
            onError={() => setImgError(true)}
            style={{ height: `${platform.logoHeight ?? 34}px`, width: "auto", maxWidth: "110px", objectFit: "contain", display: "block", filter: platform.makeBlack ? "brightness(0)" : undefined }}
          />
        ) : (
          <span className="si-ig-card-fallback">{platform.name}</span>
        )}
      </div>
    </div>
  );
}

export default function SiIntegrationsGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Tab bar */}
      <div className="si-ig-tabs-wrap">
        <div className="si-ig-tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`si-ig-tab${activeTab === i ? " si-ig-tab--active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Logo grid */}
      <div className="si-ig-grid">
        {TABS[activeTab].platforms.map((platform) => (
          <LogoCard key={platform.name} platform={platform} />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Tab bar ── */
        .si-ig-tabs-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; margin-bottom: 28px; }
        .si-ig-tabs-wrap::-webkit-scrollbar { display: none; }
        .si-ig-tabs { display: inline-flex; min-width: 100%; border: 1.5px solid rgba(0,0,0,0.14); border-radius: 10px; overflow: hidden; }
        .si-ig-tab { flex: 1; min-width: max-content; padding: 14px 20px; background: #FFFFFF; color: #000000; border: none; border-right: 1.5px solid rgba(0,0,0,0.14); cursor: pointer; font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; line-height: 1.3; white-space: nowrap; transition: background 0.2s ease, color 0.2s ease; }
        .si-ig-tab:last-child { border-right: none; }
        .si-ig-tab--active { background: #000000; color: #FFFFFF; }
        .si-ig-tab:not(.si-ig-tab--active):hover { background: rgba(0,0,0,0.04); }

        /* ── Logo grid ── */
        .si-ig-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; align-items: start; }

        /* ── Logo card ── */
        .si-ig-card { background: #FFFFFF; border-radius: 12px; border: 1px solid rgba(0,0,0,0.08); padding: 20px 16px; display: flex; align-items: center; justify-content: center; transition: box-shadow 0.2s ease; }
        .si-ig-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
        .si-ig-card-logo { display: flex; align-items: center; justify-content: center; height: 36px; }
        .si-ig-card-fallback { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700; color: #000; text-align: center; }
        .si-ig-card-name { font-family: 'Poppins', sans-serif; font-size: 11px; color: #6b7280; text-align: center; line-height: 1.3; }

        /* ── Responsive ── */
        @media (max-width: 1024px) { .si-ig-grid { grid-template-columns: repeat(4, 1fr) !important; } .si-ig-tab { font-size: 12px !important; padding: 12px 8px !important; } }
        @media (max-width: 768px)  {
          .si-ig-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 10px !important; }
          .si-ig-tabs-wrap { overflow-x: visible; }
          .si-ig-tabs { display: flex; flex-wrap: wrap; min-width: unset; width: 100%; border: none; border-radius: 0; overflow: visible; gap: 8px; }
          .si-ig-tab { flex: 1 1 calc(33.333% - 6px); border: 1.5px solid rgba(0,0,0,0.14); border-right: 1.5px solid rgba(0,0,0,0.14) !important; border-radius: 8px; font-size: 12px !important; padding: 12px 8px !important; text-align: center; }
          .si-ig-tab--active { background: #000000; color: #FFFFFF; border-color: #000000 !important; }
        }
        @media (max-width: 480px)  { .si-ig-grid { grid-template-columns: repeat(2, 1fr) !important; } .si-ig-card { padding: 16px 12px !important; } }
      ` }} />
    </>
  );
}
