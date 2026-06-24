"use client";

import { useState } from "react";
import { FAQ_CATEGORIES, type FaqIcon } from "@/lib/faqs";

// Icon set for the category nav + section headings (stroke icons, currentColor).
const ICONS: Record<FaqIcon, React.ReactNode> = {
  info: (<><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></>),
  tag: (<><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" /><path d="M7 7h.01" /></>),
  code: (<path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />),
  migrate: (<><path d="M21 12a9 9 0 1 1-2.64-6.36" /><path d="M21 4v5h-5" /></>),
  chart: (<><path d="M3 21h18" /><path d="M7 21v-7M12 21V8M17 21v-11" /></>),
  search: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>),
  store: (<><path d="M3 7l2-3h14l2 3M4 7v13h16V7M3 7h18M9 20v-6h6v6" /></>),
  support: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.6" /><path d="M5 5l4.4 4.4M19 5l-4.4 4.4M5 19l4.4-4.4M19 19l-4.4-4.4" /></>),
};

function Icon({ name, size = 18 }: { name: FaqIcon; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {ICONS[name]}
    </svg>
  );
}

export default function FaqCategories() {
  // Open the first question by default; key is `${categoryId}-${index}`.
  const [open, setOpen] = useState<string | null>(`${FAQ_CATEGORIES[0].id}-0`);

  function jump(id: string) {
    document.getElementById(`faq-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="ew-faqs">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="ewf-nav" aria-label="FAQ categories">
        {FAQ_CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`#faq-${cat.id}`}
            className="ewf-chip"
            onClick={(e) => { e.preventDefault(); jump(cat.id); }}
          >
            <Icon name={cat.icon} size={16} />
            {cat.label}
          </a>
        ))}
      </nav>

      {FAQ_CATEGORIES.map((cat) => (
        <section key={cat.id} id={`faq-${cat.id}`} className="ewf-cat" aria-labelledby={`faq-h-${cat.id}`}>
          <div className="ewf-cat-head">
            <span className="ewf-cat-icon"><Icon name={cat.icon} size={20} /></span>
            <h2 id={`faq-h-${cat.id}`} className="ewf-cat-title">{cat.label}</h2>
          </div>

          {cat.items.map((item, i) => {
            const key = `${cat.id}-${i}`;
            const isOpen = open === key;
            return (
              <div key={item.question} className={`ewf-item ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="ewf-q"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${key}`}
                  id={`trigger-${key}`}
                  onClick={() => setOpen(isOpen ? null : key)}
                >
                  <h3 className="ewf-q-text">{item.question}</h3>
                  <span className="ewf-q-icon" aria-hidden>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div id={`panel-${key}`} role="region" aria-labelledby={`trigger-${key}`} className="ewf-panel">
                  <div className="ewf-panel-inner">
                    <p className="ewf-a">{item.answer}</p>
                    {item.link && (
                      <a className="ewf-a-link" href={item.link.href}>
                        {item.link.label}
                        <svg width="15" height="13" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      ))}
    </div>
  );
}

const CSS = `
.ew-faqs{font-family:'Poppins',sans-serif;color:#334155}
.ew-faqs *{box-sizing:border-box}
.ewf-nav{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:1000px;margin:0 auto 52px}
.ewf-chip{display:inline-flex;align-items:center;gap:8px;padding:9px 16px;border-radius:999px;border:1px solid #e2e8f0;background:#fff;color:#334155;font-size:14px;font-weight:500;text-decoration:none;transition:border-color .15s ease,color .15s ease,box-shadow .15s ease;white-space:nowrap}
.ewf-chip:hover{border-color:#2A9555;color:#1E7E45;box-shadow:0 1px 2px rgba(0,0,0,0.06)}
.ewf-chip svg{flex-shrink:0;color:#2A9555}
.ewf-cat{max-width:860px;margin:0 auto;scroll-margin-top:120px}
.ewf-cat-head{display:flex;align-items:center;gap:12px;margin:52px 0 10px}
.ewf-cat:first-of-type .ewf-cat-head{margin-top:0}
.ewf-cat-icon{flex-shrink:0;width:38px;height:38px;border-radius:10px;background:#E8F5EC;color:#2A9555;display:flex;align-items:center;justify-content:center}
.ewf-cat-title{font-size:22px;font-weight:700;color:#0f172a;margin:0;line-height:1.2}
.ewf-item{border-bottom:1px solid #EAEAEA}
.ewf-cat .ewf-item:first-of-type{border-top:1px solid #EAEAEA}
.ewf-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 4px;background:transparent;border:none;cursor:pointer;text-align:left;font-family:inherit}
.ewf-q-text{font-size:18px;font-weight:500;color:#000;line-height:1.5;margin:0}
.ewf-q-icon{flex-shrink:0;width:22px;height:22px;color:#2A9555;display:flex;align-items:center;justify-content:center;transition:transform .25s ease}
.ewf-item.is-open .ewf-q-icon{transform:rotate(180deg)}
.ewf-panel{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease}
.ewf-item.is-open .ewf-panel{grid-template-rows:1fr}
.ewf-panel-inner{overflow:hidden}
.ewf-a{margin:0;padding:0 36px 8px 4px;color:#000000CC;font-size:16px;line-height:26px}
.ewf-a-link{display:inline-flex;align-items:center;gap:7px;margin:0 4px 22px;color:#2A9555;font-weight:600;font-size:15px;text-decoration:none}
.ewf-a-link:hover{text-decoration:underline}
@media (max-width:768px){
  .ewf-nav{gap:8px;margin-bottom:36px}
  .ewf-chip{padding:8px 13px;font-size:13px}
  .ewf-cat-head{margin:40px 0 8px}
  .ewf-cat-title{font-size:19px}
  .ewf-cat-icon{width:34px;height:34px}
  .ewf-q{padding:18px 4px}
  .ewf-q-text{font-size:16px;line-height:1.45}
  .ewf-a{font-size:14px;line-height:22px;padding-right:8px}
}
`;
