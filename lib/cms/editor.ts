import {
  BlockquoteFeature,
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  UnderlineFeature,
  UnorderedListFeature,
  UploadFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

// The editor used for article bodies.
//
// H1 IS DELIBERATELY ABSENT. The page already renders the post title as its
// only <h1>; a second one in the body would compete with it for the same job
// and muddle the page's outline. H2 starts a section, H3 subdivides it, and the
// article's contents list is built from the H2s.
export const postContentEditor = lexicalEditor({
  features: [
    ParagraphFeature(),
    HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }),
    BoldFeature(),
    ItalicFeature(),
    UnderlineFeature(),
    StrikethroughFeature(),
    InlineCodeFeature(),
    LinkFeature({ enabledCollections: ["posts"] }),
    UnorderedListFeature(),
    OrderedListFeature(),
    BlockquoteFeature(),
    HorizontalRuleFeature(),
    // Lets an image be dropped into the middle of an article. It uploads to the
    // same Media collection, so it lands in object storage like any other.
    UploadFeature({
      collections: {
        media: {
          fields: [
            {
              name: "caption",
              type: "text",
              admin: { description: "Optional. Shown under the image." },
            },
          ],
        },
      },
    }),
    // A toolbar pinned to the top, plus the one that appears on selection.
    // Without the fixed toolbar the formatting controls are hidden until you
    // highlight something, which people reasonably read as "there are none".
    FixedToolbarFeature(),
    InlineToolbarFeature(),
  ],
});

// A deliberately plain editor for short answers: bold, italic and links only.
// An FAQ answer with its own headings and images would not be an answer.
export const simpleEditor = lexicalEditor({
  features: [
    ParagraphFeature(),
    BoldFeature(),
    ItalicFeature(),
    LinkFeature({ enabledCollections: ["posts"] }),
    InlineToolbarFeature(),
  ],
});
