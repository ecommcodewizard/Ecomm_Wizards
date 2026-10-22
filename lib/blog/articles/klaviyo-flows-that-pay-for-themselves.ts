import type { Article } from "../articles";

// SAMPLE ARTICLE: real guidance, written to show the article layout. Review it
// before it goes out under our name.
const article: Article = {
  summary:
    "Campaigns need you every week. Flows don't. Set up these five once in Klaviyo and they'll send the right email at the right moment, every day, without anyone pressing send.",
  answer:
    "Set up five Klaviyo flows: abandoned checkout, welcome series, post-purchase, browse abandonment and winback. Build abandoned checkout first, because those shoppers were one step from buying. Give every flow a filter that stops it once the shopper orders, and judge each one by the revenue it brings in.",
  takeaways: [
    "Flows are automatic emails sent when a shopper does something, like signing up or leaving checkout.",
    "Start with abandoned checkout and welcome. They're closest to a sale.",
    "Every flow needs a filter that stops it the moment the shopper buys.",
    "Check each flow once a month. Small fixes add up because flows never stop running.",
  ],
  sections: [
    {
      id: "why-flows",
      title: "Flows earn while you sleep. Campaigns don't.",
      blocks: [
        {
          type: "p",
          text: "A campaign is an email you send to a list on a date you pick. A flow is an email Klaviyo sends on its own when a shopper does something. They sign up, they start checkout, they buy, or they go quiet.",
        },
        {
          type: "p",
          text: "That timing is the whole point. A flow reaches people at the moment they're thinking about you, not when it suits your calendar. And once it's built, it keeps working. You write it once and it runs for every shopper, every day.",
        },
        {
          type: "p",
          text: "Most stores do the opposite. They put hours into weekly campaigns and leave their flows on Klaviyo's defaults. If that sounds like your account, the five flows below are where to start.",
        },
      ],
    },
    {
      id: "welcome",
      title: "1. Welcome series: turn a signup into a first order",
      blocks: [
        {
          type: "p",
          text: "**Trigger:** someone joins your email list. They've just told you they're interested, so this is the warmest they'll ever be. Don't waste it on a plain \"thanks for signing up\".",
        },
        { type: "h3", text: "What to send" },
        {
          type: "ol",
          items: [
            "**Right away:** deliver whatever you promised at signup, like a discount code, and show your best sellers.",
            "**Day 2:** tell your story. Who you are, why you make what you make, and what makes it different.",
            "**Day 4:** show proof. Reviews, photos from real customers, or the problem your product solves.",
            "**Day 6:** a gentle reminder that their code is still there, if you gave one.",
          ],
        },
        {
          type: "tip",
          text: "Add a flow filter for **Placed Order zero times since starting this flow**. Klaviyo checks it before every email, so the moment someone buys, they stop getting \"come shop with us\" emails. Klaviyo explains how in its [guide to flow triggers and filters](https://help.klaviyo.com/hc/en-us/articles/115002779051).",
        },
      ],
    },
    {
      id: "abandoned-checkout",
      title: "2. Abandoned checkout: win back the sale you nearly had",
      blocks: [
        {
          type: "p",
          text: "**Trigger:** someone starts checkout and doesn't finish. They picked a product, added it to their cart and typed in their email. They were one step away.",
        },
        {
          type: "p",
          text: "People leave for ordinary reasons. Shipping cost more than they expected, the phone rang, or they wanted to think about it. Your job is to remind them, show them what they left, and answer the question that stopped them.",
        },
        { type: "h3", text: "What to send" },
        {
          type: "ol",
          items: [
            "**After about an hour:** a simple reminder with a photo of the product and a button straight back to checkout.",
            "**After a day:** answer common doubts. Delivery times, returns, sizing, reviews.",
            "**After two or three days:** a last nudge. Save any discount for this email, so you're not training shoppers to wait for one.",
          ],
        },
        {
          type: "p",
          text: "Klaviyo's own [abandoned cart setup guide](https://help.klaviyo.com/hc/en-us/articles/115002779411) recommends the same exit filter, so anyone who orders drops out before the next reminder.",
        },
        {
          type: "image",
          src: "/images/Case%20studies/Living%20in%20Sunshine%20Klaviyo%20(1).png",
          alt: "Four Living in Sunshine emails: two cart reminders, a setup guide and a review request",
          caption:
            "Cart reminders, a post-purchase guide and a review request from our [Klaviyo work for Living in Sunshine](/case-studies/living-in-sunshine-klaviyo-email).",
          width: 1920,
          height: 1017,
        },
      ],
    },
    {
      id: "browse-abandonment",
      title: "3. Browse abandonment: follow up on real interest",
      blocks: [
        {
          type: "p",
          text: "**Trigger:** a known subscriber looks at a product and leaves without adding it to their cart. It's a softer signal than abandoned checkout, so keep the tone softer too.",
        },
        {
          type: "p",
          text: "One or two emails is plenty. Show the product they looked at, a few similar ones and a review or two. No pressure and no countdown timers. You're just making it easy to pick up where they left off.",
        },
        {
          type: "tip",
          text: "Turn on **smart sending** and add a filter so people who are already in your abandoned checkout flow don't get both. One reminder at a time is enough.",
        },
      ],
    },
    {
      id: "post-purchase",
      title: "4. Post-purchase: make the second order easier than the first",
      blocks: [
        {
          type: "p",
          text: "**Trigger:** someone places an order. Most stores send the receipt and then go silent until the next sale. That silence is where repeat customers get lost.",
        },
        { type: "h3", text: "What to send" },
        {
          type: "ul",
          items: [
            "**A real thank-you** from a person, not the order confirmation.",
            "**How to get the most from the product.** Care tips, setup help or ways to use it. This is useful, so people open it.",
            "**A review request** once the product has had time to arrive and be used.",
            "**What to buy next.** Products that go with what they bought, timed to when they'd need them.",
          ],
        },
        {
          type: "p",
          text: "Split the flow for first-time and returning customers. A first-time buyer needs reassurance. A loyal one would rather hear what's new.",
        },
      ],
    },
    {
      id: "winback",
      title: "5. Winback: wake up customers before they're gone",
      blocks: [
        {
          type: "p",
          text: "**Trigger:** a past customer hasn't ordered in a while. How long \"a while\" is depends on what you sell. For coffee it might be six weeks. For furniture it could be a year. Look at how often your customers usually come back and start just after that.",
        },
        {
          type: "p",
          text: "Open with what's new since their last order. Then remind them why they bought in the first place. Keep any incentive for the final email, for people who still haven't come back.",
        },
        {
          type: "quote",
          text: "The best winback email doesn't beg. It gives a past customer a reason to look again.",
        },
      ],
    },
    {
      id: "build-order",
      title: "Build them in this order",
      blocks: [
        {
          type: "p",
          text: "You don't need all five live by Friday. Build them in the order of how close each one is to a sale:",
        },
        {
          type: "ol",
          items: [
            "**Abandoned checkout.** The shopper was one step from buying.",
            "**Welcome series.** New subscribers are at their most interested.",
            "**Post-purchase.** It turns one order into two.",
            "**Browse abandonment.** Real interest, just earlier in the journey.",
            "**Winback.** It needs some order history before it has anyone to send to.",
          ],
        },
        {
          type: "p",
          text: "Give each flow a few weeks to run before you change it. Then look at its revenue in Klaviyo's flow analytics and work on the weakest email first.",
        },
      ],
    },
    {
      id: "mistakes",
      title: "Five mistakes that quietly cost sales",
      blocks: [
        {
          type: "ul",
          items: [
            "**No exit filter.** People keep getting reminders after they've bought. It's annoying and it looks careless.",
            "**Leading with a discount.** If every first email has a code, shoppers learn to wait for it.",
            "**Template copy.** Klaviyo's default emails sound like everyone else's. Write like your brand talks.",
            "**Set and forget.** Prices, products and offers change. Check every flow once a month for broken links and old products.",
            "**Only checking opens.** Open rates aren't reliable anymore. Judge each flow by the orders and revenue it brings in.",
          ],
        },
        {
          type: "p",
          text: "Not sure how your flows are doing? A [Klaviyo audit](/services/klaviyo-audit) looks at every flow in your account and shows you what to fix first.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What's the difference between a Klaviyo flow and a campaign?",
      a: "A campaign is a one-off email you send to a list on a date you choose. A flow sends automatically when a shopper does something, like signing up, starting checkout or placing an order.",
    },
    {
      q: "Which Klaviyo flow should I set up first?",
      a: "Abandoned checkout. Those shoppers were one step from buying, so a well-timed reminder has the best chance of turning into an order.",
    },
    {
      q: "How many emails should each flow have?",
      a: "Usually two to four. Enough to remind and reassure, not so many that people unsubscribe. Browse abandonment works best with just one or two.",
    },
    {
      q: "Should my flows include a discount?",
      a: "Not in the first email. Use a discount, if at all, in the last email of a flow, for people who didn't act on the earlier ones. That protects your margin.",
    },
    {
      q: "How often should I review my flows?",
      a: "Check them monthly for broken links, sold-out products and old offers. Look at each flow's revenue every quarter and improve the weakest email first.",
    },
  ],
  sources: [
    {
      title: "Understanding flow triggers and filters",
      publisher: "Klaviyo Help Center",
      url: "https://help.klaviyo.com/hc/en-us/articles/115002779051",
    },
    {
      title: "How to create an abandoned cart flow",
      publisher: "Klaviyo Help Center",
      url: "https://help.klaviyo.com/hc/en-us/articles/115002779411",
    },
  ],
  updated: "2026-10-22",
};

export default article;
