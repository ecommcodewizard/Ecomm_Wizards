# Design Language: Shopify Agency | Design, CRO, Development & Growth Experts

> Extracted from `https://ecommwizards.com` on April 21, 2026
> 4443 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#61ce70` | rgb(97, 206, 112) | hsl(128, 53%, 59%) | 17 |
| Secondary | `#046bd2` | rgb(4, 107, 210) | hsl(210, 96%, 42%) | 370 |
| Accent | `#6ec1e4` | rgb(110, 193, 228) | hsl(198, 69%, 66%) | 728 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#334155` | hsl(215, 25%, 27%) | 4567 |
| `#ffffff` | hsl(0, 0%, 100%) | 1612 |
| `#000000` | hsl(0, 0%, 0%) | 310 |
| `#7a7a7a` | hsl(0, 0%, 48%) | 56 |
| `#69727d` | hsl(213, 9%, 45%) | 32 |
| `#101010` | hsl(0, 0%, 6%) | 26 |
| `#fbf7ed` | hsl(43, 64%, 96%) | 2 |
| `#333333` | hsl(0, 0%, 20%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#000000`, `#fbf7ed`

### Text Colors

Text color palette: `#000000`, `#334155`, `#046bd2`, `#ffffff`, `#101010`, `#b18945`, `#333333`, `#7a7a7a`, `#6ec1e4`, `#1e293b`

### Gradients

```css
background-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 100%);
```

```css
background-image: linear-gradient(rgb(0, 0, 0) 0%, rgb(18, 18, 18) 60%);
```

```css
background-image: linear-gradient(280deg, rgb(0, 0, 0) 0%, rgb(18, 18, 18) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#334155` | text, border | 4567 |
| `#ffffff` | background, text, border | 1612 |
| `#b18945` | text, border, background | 1070 |
| `#6ec1e4` | text, border | 728 |
| `#046bd2` | text, border, background | 370 |
| `#000000` | text, border, background | 310 |
| `#7a7a7a` | text, border | 56 |
| `#69727d` | text, border | 32 |
| `#101010` | text, border, background | 26 |
| `#61ce70` | background | 17 |
| `#1e293b` | text, border | 10 |
| `#fbf7ed` | background | 2 |
| `#333333` | text | 1 |

## Typography

### Font Families

- **Poppins** — used for all (4330 elements)
- **Times New Roman** — used for body (102 elements)
- **Lato** — used for headings (7 elements)
- **Nunito** — used for body (4 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 52px | 3.25rem | 600 | 62px | normal | h1, span |
| 50px | 3.125rem | 400 | 50px | normal | div, svg, path, span |
| 42px | 2.625rem | 600 | 52px | normal | h2 |
| 40px | 2.5rem | 600 | 50px | normal | h2 |
| 30px | 1.875rem | 400 | 30px | normal | div, svg, path, h2 |
| 25px | 1.5625rem | 400 | 25px | normal | span, svg, path, h2 |
| 24px | 1.5rem | 600 | 31.2px | normal | h3, span |
| 20px | 1.25rem | 600 | 30px | normal | h2, br |
| 18px | 1.125rem | 400 | 28px | normal | div, span, br, strong |
| 17px | 1.0625rem | 400 | 27px | normal | h2, b |
| 16px | 1rem | 400 | normal | normal | html, head, meta, style |
| 15px | 0.9375rem | 400 | 25px | normal | a, h3, span, div |
| 14px | 0.875rem | 500 | 22px | normal | a, span |
| 13px | 0.8125rem | 400 | 23px | normal | p, a, span |
| 11px | 0.6875rem | 900 | 25px | normal | i, svg, path |

### Heading Scale

```css
h1 { font-size: 52px; font-weight: 600; line-height: 62px; }
h2 { font-size: 42px; font-weight: 600; line-height: 52px; }
h2 { font-size: 40px; font-weight: 600; line-height: 50px; }
h2 { font-size: 30px; font-weight: 400; line-height: 30px; }
h2 { font-size: 25px; font-weight: 400; line-height: 25px; }
h3 { font-size: 24px; font-weight: 600; line-height: 31.2px; }
h2 { font-size: 20px; font-weight: 600; line-height: 30px; }
h2 { font-size: 17px; font-weight: 400; line-height: 27px; }
h2 { font-size: 16px; font-weight: 400; line-height: normal; }
h3 { font-size: 15px; font-weight: 400; line-height: 25px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (3627x), `500` (620x), `600` (147x), `900` (36x), `700` (13x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-10 | 10px | 0.625rem |
| spacing-20 | 20px | 1.25rem |
| spacing-24 | 24px | 1.5rem |
| spacing-40 | 40px | 2.5rem |
| spacing-45 | 45px | 2.8125rem |
| spacing-60 | 60px | 3.75rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 3px | 17 |
| md | 10px | 178 |
| xl | 20px | 7 |
| full | 50px | 8 |
| full | 100px | 30 |

## Box Shadows

**xs** — blur: 2px
```css
box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
```

## CSS Custom Properties

### Colors

```css
--ast-global-color-primary: var(--ast-global-color-4);
--ast-global-color-secondary: var(--ast-global-color-5);
--ast-global-color-alternate-background: var(--ast-global-color-6);
--ast-global-color-subtle-background: var(--ast-global-color-7);
--ast-bg-style-guide: var( --ast-global-color-secondary,var(--ast-global-color-5) );
--ast-global-dark-bg-style: #fff;
--ast-widget-bg-color: #fafafa;
--ast-wc-container-head-bg-color: #fbfbfb;
--ast-title-layout-bg: #eeeeee;
--ast-search-border-color: #e7e7e7;
--ast-lifter-hover-bg: #e6e6e6;
--ast-gallery-block-color: #000;
--srfm-color-input-label: var(--ast-global-color-2);
--ast-global-color-0: #046bd2;
--ast-global-color-1: #045cb4;
--ast-global-color-2: #1e293b;
--ast-global-color-3: #334155;
--ast-global-color-4: #FFFFFF;
--ast-global-color-5: #F0F5FA;
--ast-global-color-6: #111111;
--ast-global-color-7: #D1D5DB;
--ast-global-color-8: #111111;
--ast-border-color: var(--ast-global-color-7);
--e-global-color-astglobalcolor0: #046bd2;
--e-global-color-astglobalcolor1: #045cb4;
--e-global-color-astglobalcolor2: #1e293b;
--e-global-color-astglobalcolor3: #334155;
--e-global-color-astglobalcolor4: #FFFFFF;
--e-global-color-astglobalcolor5: #F0F5FA;
--e-global-color-astglobalcolor6: #111111;
--e-global-color-astglobalcolor7: #D1D5DB;
--e-global-color-astglobalcolor8: #111111;
--wp--preset--color--black: #000000;
--wp--preset--color--cyan-bluish-gray: #abb8c3;
--wp--preset--color--white: #ffffff;
--wp--preset--color--pale-pink: #f78da7;
--wp--preset--color--vivid-red: #cf2e2e;
--wp--preset--color--luminous-vivid-orange: #ff6900;
--wp--preset--color--luminous-vivid-amber: #fcb900;
--wp--preset--color--light-green-cyan: #7bdcb5;
--wp--preset--color--vivid-green-cyan: #00d084;
--wp--preset--color--pale-cyan-blue: #8ed1fc;
--wp--preset--color--vivid-cyan-blue: #0693e3;
--wp--preset--color--vivid-purple: #9b51e0;
--wp--preset--color--ast-global-color-0: var(--ast-global-color-0);
--wp--preset--color--ast-global-color-1: var(--ast-global-color-1);
--wp--preset--color--ast-global-color-2: var(--ast-global-color-2);
--wp--preset--color--ast-global-color-3: var(--ast-global-color-3);
--wp--preset--color--ast-global-color-4: var(--ast-global-color-4);
--wp--preset--color--ast-global-color-5: var(--ast-global-color-5);
--wp--preset--color--ast-global-color-6: var(--ast-global-color-6);
--wp--preset--color--ast-global-color-7: var(--ast-global-color-7);
--wp--preset--color--ast-global-color-8: var(--ast-global-color-8);
--swiper-theme-color: #007aff;
```

### Spacing

```css
--ast-post-nav-space: 0;
--ast-container-default-xlg-padding: 2.5em;
--ast-container-default-lg-padding: 2.5em;
--ast-container-default-slg-padding: 2em;
--ast-container-default-md-padding: 2.5em;
--ast-container-default-sm-padding: 2.5em;
--ast-container-default-xs-padding: 2.4em;
--ast-container-default-xxs-padding: 1.8em;
--wp--custom--ast-default-block-top-padding: 3em;
--wp--custom--ast-default-block-right-padding: 3em;
--wp--custom--ast-default-block-bottom-padding: 3em;
--wp--custom--ast-default-block-left-padding: 3em;
--wp--custom--ast-content-width-size: 1200px;
--wp--custom--ast-wide-width-size: calc(1200px + var(--wp--custom--ast-default-block-left-padding) + var(--wp--custom--ast-default-block-right-padding));
--wp--preset--font-size--small: 13px;
--wp--preset--font-size--medium: 20px;
--wp--preset--font-size--large: 36px;
--wp--preset--font-size--x-large: 42px;
--wp--preset--spacing--20: 0.44rem;
--wp--preset--spacing--30: 0.67rem;
--wp--preset--spacing--40: 1rem;
--wp--preset--spacing--50: 1.5rem;
--wp--preset--spacing--60: 2.25rem;
--wp--preset--spacing--70: 3.38rem;
--wp--preset--spacing--80: 5.06rem;
--wp--style--global--content-size: var(--wp--custom--ast-content-width-size);
--wp--style--global--wide-size: var(--wp--custom--ast-wide-width-size);
--wp--style--block-gap: 24px;
--swiper-navigation-size: 44px;
```

### Typography

```css
--ast-blog-title-font-weight: 600;
```

### Shadows

```css
--ast-shadow-style-guide: 0px 0px 4px 0 #00000057;
--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);
--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);
```

### Other

```css
--direction-multiplier: 1;
--page-title-display: block;
--ast-code-block-background: #ECEFF3;
--ast-comment-inputs-background: #FFF;
--ast-normal-container-width: 1200px;
--ast-narrow-container-width: 750px;
--ast-blog-meta-weight: 600;
--ast-global-dark-lfs: #fbfbfb;
--wp--custom--ast-container-width: 1200px;
--wp--preset--aspect-ratio--square: 1;
--wp--preset--aspect-ratio--4-3: 4/3;
--wp--preset--aspect-ratio--3-4: 3/4;
--wp--preset--aspect-ratio--3-2: 3/2;
--wp--preset--aspect-ratio--2-3: 2/3;
--wp--preset--aspect-ratio--16-9: 16/9;
--wp--preset--aspect-ratio--9-16: 9/16;
--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);
--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);
--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);
--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
```

### Dependencies

```css
--ast-global-color-primary: --ast-global-color-4;
--ast-global-color-secondary: --ast-global-color-5;
--ast-global-color-alternate-background: --ast-global-color-6;
--ast-global-color-subtle-background: --ast-global-color-7;
--ast-bg-style-guide: --ast-global-color-5;
--srfm-color-input-label: --ast-global-color-2;
--wp--custom--ast-wide-width-size: --wp--custom--ast-default-block-left-padding,--wp--custom--ast-default-block-right-padding;
--ast-border-color: --ast-global-color-7;
--wp--preset--color--ast-global-color-0: --ast-global-color-0;
--wp--preset--color--ast-global-color-1: --ast-global-color-1;
--wp--preset--color--ast-global-color-2: --ast-global-color-2;
--wp--preset--color--ast-global-color-3: --ast-global-color-3;
--wp--preset--color--ast-global-color-4: --ast-global-color-4;
--wp--preset--color--ast-global-color-5: --ast-global-color-5;
--wp--preset--color--ast-global-color-6: --ast-global-color-6;
--wp--preset--color--ast-global-color-7: --ast-global-color-7;
--wp--preset--color--ast-global-color-8: --ast-global-color-8;
--wp--style--global--content-size: --wp--custom--ast-content-width-size;
--wp--style--global--wide-size: --wp--custom--ast-wide-width-size;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 544px | max-width |
| md | 766px | min-width |
| md | 767px | max-width |
| md | 768px | min-width |
| md | 769px | min-width |
| 921px | 921px | max-width |
| 922px | 922px | min-width |
| lg | 1024px | max-width |
| lg | 1025px | min-width |
| 99999px | 99999px | max-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`

**Durations:** `0.2s`, `0.3s`, `0.4s`, `0.25s`, `1s`

### Common Transitions

```css
transition: all;
transition: 0.2s linear;
transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
transition: 0.4s;
transition: transform 0.4s, -webkit-transform 0.4s;
transition: 0.3s;
transition: opacity 0.25s ease-out;
transition: opacity 1s;
transition: transform;
```

### Keyframe Animations

**eicon-spin**
```css
@keyframes eicon-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(359deg); }
}
```

**swiper-preloader-spin**
```css
@keyframes swiper-preloader-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**ekit_ajax_spinner_rotation**
```css
@keyframes ekit_ajax_spinner_rotation {
  100% { transform: rotate(360deg); }
}
```

**ekit_ajax_spinner_rotation**
```css
@keyframes ekit_ajax_spinner_rotation {
  100% { transform: rotate(360deg); }
}
```

**xs-zoomIn**
```css
@keyframes xs-zoomIn {
  0% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); }
  50% { opacity: 1; }
}
```

**xs-zoomIn**
```css
@keyframes xs-zoomIn {
  0% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); }
  50% { opacity: 1; }
}
```

**dtb-spinner**
```css
@keyframes dtb-spinner {
  100% { transform: rotate(360deg); }
}
```

**dtb-spinner**
```css
@keyframes dtb-spinner {
  100% { transform: rotate(360deg); }
}
```

**bounceAnim**
```css
@keyframes bounceAnim {
  0%, 100%, 20%, 50%, 80% { transform: translateY(0px); }
  40% { transform: translateY(-16px); }
  60% { transform: translateY(-8px); }
}
```

**bounceAnim**
```css
@keyframes bounceAnim {
  0%, 100%, 20%, 50%, 80% { transform: translateY(0px); }
  40% { transform: translateY(-16px); }
  60% { transform: translateY(-8px); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (68 instances)

```css
.button {
  background-color: rgb(97, 206, 112);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
  padding-top: 20px;
  padding-right: 45px;
  border-radius: 100px;
}
```

### Cards (35 instances)

```css
.card {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (139 instances)

```css
.link {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (101 instances)

```css
.navigatio {
  background-color: rgb(0, 0, 0);
  color: rgb(51, 65, 85);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (2 instances)

```css
.foote {
  background-color: rgb(255, 255, 255);
  color: rgb(51, 65, 85);
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 16px;
}
```

### Modals (4 instances)

```css
.modal {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (140 instances)

```css
.dropdown {
  background-color: rgba(2, 1, 1, 0);
  border-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border-color: rgb(51, 65, 85);
  padding-top: 0px;
}
```

### Badges (2 instances)

```css
.badge {
  color: rgb(105, 114, 125);
  font-size: 50px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Avatars (5 instances)

```css
.avatar {
  border-radius: 0px;
}
```

### Accordions (64 instances)

```css
.accordion {
  color: rgb(4, 107, 210);
  font-size: 16px;
  padding-top: 0px;
  padding-right: 0px;
  border-color: rgb(4, 107, 210);
}
```

### Switches (22 instances)

```css
.switche {
  background-color: rgba(2, 1, 1, 0);
  border-radius: 0px;
  border-color: rgb(4, 107, 210);
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 38 instances, 1 variant

**Variant 1** (38 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 65, 85);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 65, 85);
  font-size: 16px;
  font-weight: 400;
```

### Button — 38 instances, 4 variants

**Variant 1** (15 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 20px 45px 20px 45px;
  border-radius: 100px;
  border: 2px solid rgb(177, 137, 69);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (2 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 12px 24px 12px 24px;
  border-radius: 100px;
  border: 2px solid rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
```

**Variant 3** (19 instances)

```css
  background: rgb(18, 18, 18);
  color: rgb(255, 255, 255);
  padding: 16px 25px 16px 25px;
  border-radius: 10px;
  border: 2px solid rgb(177, 137, 69);
  font-size: 15px;
  font-weight: 500;
```

**Variant 4** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(177, 137, 69);
  padding: 0px 0px 2px 0px;
  border-radius: 0px;
  border: 0px 0px 1px solid rgb(177, 137, 69);
  font-size: 15px;
  font-weight: 500;
```

### Button — 34 instances, 1 variant

**Variant 1** (34 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Button — 34 instances, 1 variant

**Variant 1** (34 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

### Button — 38 instances, 2 variants

**Variant 1** (36 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 500;
```

### Button — 4 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 500;
```

### Card — 15 instances, 1 variant

**Variant 1** (15 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 65, 85);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 65, 85);
  font-size: 16px;
  font-weight: 400;
```

### Card — 10 instances, 1 variant

**Variant 1** (10 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 65, 85);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 65, 85);
  font-size: 16px;
  font-weight: 400;
```

### Card — 10 instances, 1 variant

**Variant 1** (10 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(51, 65, 85);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(51, 65, 85);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**0 grid containers** and **495 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 100% | 20px |
| min(100%, 1320px) | 0px |

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 318x |
| row/nowrap | 144x |
| row/wrap | 4x |
| row-reverse/nowrap | 29x |

**Gap values:** `10px`, `15px`, `20px`, `30px`, `5px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 85/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 19 !important rules — prefer specificity over overrides
- 59% of CSS is unused — consider purging
- 5201 duplicate CSS declarations

## Gradients

**3 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | 0deg | 2 | brand |
| linear | — | 2 | brand |
| linear | 280deg | 2 | brand |

```css
background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 100%);
background: linear-gradient(rgb(0, 0, 0) 0%, rgb(18, 18, 18) 60%);
background: linear-gradient(280deg, rgb(0, 0, 0) 0%, rgb(18, 18, 18) 100%);
```

## Z-Index Map

**6 unique z-index values** across 4 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 1000,1000 | div.e.l.e.m.e.n.t.s.k.i.t.-.m.e.n.u.-.c.o.n.t.a.i.n.e.r. .e.l.e.m.e.n.t.s.k.i.t.-.m.e.n.u.-.o.f.f.c.a.n.v.a.s.-.e.l.e.m.e.n.t.s. .e.l.e.m.e.n.t.s.k.i.t.-.n.a.v.b.a.r.-.n.a.v.-.d.e.f.a.u.l.t. .e.k.i.t.-.n.a.v.-.m.e.n.u.-.o.n.e.-.p.a.g.e.-.n.o. .e.k.i.t.-.n.a.v.-.d.r.o.p.d.o.w.n.-.h.o.v.e.r, div.e.l.e.m.e.n.t.s.k.i.t.-.m.e.n.u.-.c.o.n.t.a.i.n.e.r. .e.l.e.m.e.n.t.s.k.i.t.-.m.e.n.u.-.o.f.f.c.a.n.v.a.s.-.e.l.e.m.e.n.t.s. .e.l.e.m.e.n.t.s.k.i.t.-.n.a.v.b.a.r.-.n.a.v.-.d.e.f.a.u.l.t. .e.k.i.t.-.n.a.v.-.m.e.n.u.-.o.n.e.-.p.a.g.e.-.n.o. .e.k.i.t.-.n.a.v.-.d.r.o.p.d.o.w.n.-.h.o.v.e.r, div.e.l.e.m.e.n.t.s.k.i.t.-.m.e.n.u.-.c.o.n.t.a.i.n.e.r. .e.l.e.m.e.n.t.s.k.i.t.-.m.e.n.u.-.o.f.f.c.a.n.v.a.s.-.e.l.e.m.e.n.t.s. .e.l.e.m.e.n.t.s.k.i.t.-.n.a.v.b.a.r.-.n.a.v.-.d.e.f.a.u.l.t. .e.k.i.t.-.n.a.v.-.m.e.n.u.-.o.n.e.-.p.a.g.e.-.n.o. .e.k.i.t.-.n.a.v.-.d.r.o.p.d.o.w.n.-.h.o.v.e.r |
| dropdown | 999,999 | div.e.l.e.m.e.n.t.s.k.i.t.-.m.e.g.a.m.e.n.u.-.p.a.n.e.l, div.e.l.e.m.e.n.t.s.k.i.t.-.m.e.g.a.m.e.n.u.-.p.a.n.e.l, div.e.l.e.m.e.n.t.s.k.i.t.-.m.e.g.a.m.e.n.u.-.p.a.n.e.l |
| sticky | 10,99 | div.e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t. .e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t.-.a.7.e.3.6.1.6. .h.e.a.d.e.r.-.2. .e.l.e.m.e.n.t.o.r.-.h.i.d.d.e.n.-.m.o.b.i.l.e. .e.-.f.l.e.x. .e.-.c.o.n.-.b.o.x.e.d. .e.-.c.o.n. .e.-.p.a.r.e.n.t, div.e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t. .e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t.-.7.7.3.f.d.4.9. .e.-.c.o.n.-.f.u.l.l. .e.-.f.l.e.x. .e.-.c.o.n. .e.-.c.h.i.l.d, div.e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t. .e.l.e.m.e.n.t.o.r.-.e.l.e.m.e.n.t.-.f.a.5.c.1.5.f. .e.-.c.o.n.-.f.u.l.l. .e.-.f.l.e.x. .e.-.c.o.n. .e.-.c.h.i.l.d |
| base | 0,1 | div.e.l.e.m.e.n.t.o.r.-.b.a.c.k.g.r.o.u.n.d.-.v.i.d.e.o.-.c.o.n.t.a.i.n.e.r, div.e.l.e.m.e.n.t.o.r.-.i.m.a.g.e.-.c.a.r.o.u.s.e.l.-.w.r.a.p.p.e.r. .s.w.i.p.e.r, div.e.l.e.m.e.n.t.o.r.-.i.m.a.g.e.-.c.a.r.o.u.s.e.l. .s.w.i.p.e.r.-.w.r.a.p.p.e.r |

## SVG Icons

**41 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| sm | 3 |
| md | 1 |
| lg | 2 |
| xl | 35 |

**Icon colors:** `rgb(177, 137, 69)`, `rgb(255, 255, 255)`, `rgb(0, 0, 0)`, `rgb(110, 193, 228)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| swiper-icons | self-hosted | 400 | normal |
| Poppins | self-hosted | 100, 200, 300, 400, 500, 600, 700, 800, 900 | italic, normal |
| Nunito | self-hosted | 200, 300, 400, 500, 600, 700, 800, 900 | italic, normal |
| Lato | self-hosted | 100, 300, 400, 700, 900 | italic, normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 154 | objectFit: fill, borderRadius: 0px, shape: square |
| gallery | 145 | objectFit: fill, borderRadius: 0px, shape: square |
| thumbnail | 4 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 2:1 (150x), 9:16 (132x), 1:1 (8x), 4:3 (5x), 3.81:1 (3x), 2.91:1 (2x), 3:2 (2x), 1.96:1 (1x)

## Motion Language

**Feel:** mechanical · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `xl` | `1s` | 1000 |

### Easing Families

- **linear** (57 uses) — `linear`
- **ease-in-out** (1 uses) — `ease`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `scrollLeft` | slide-x | transform | 1 |

## Component Anatomy

### button — 186 instances

**Slots:** label, icon
**Variants:** link
**Sizes:** sm

| variant | count | sample label |
|---|---|---|
| default | 148 | View Case Studies |
| link | 38 | View Case Studies |

### card — 35 instances

**Slots:** media

## Brand Voice

**Tone:** friendly · **Pronoun:** third-person · **Headings:** Title Case (tight)

### Top CTA Verbs

- **get** (52)
- **book** (28)
- **request** (20)
- **view** (8)
- **claim** (8)
- **schedule** (8)
- **see** (4)
- **optimize** (4)

### Button Copy Patterns

- "book a call" (24×)
- "get started" (12×)
- "view case studies" (8×)
- "get a free test drive" (8×)
- "claim free audit" (8×)
- "request app quote" (8×)
- "schedule b2b consultation" (8×)
- "request pos demo" (8×)
- "get a free quote" (4×)
- "get a free audit" (4×)

### Sample Headings

> 
						
							Custom Shopify Theme Design						
					
> 
						
							Convert any Figma to Shopify						
					
> 
						
							Bulk Hours for Shopify Tasks						
					
> 
						
							New Store Development						
					
> 
						
							Free Shopify Concept Design						
					
> 
						
							Custom Shopify Theme Design						
					
> 
						
							Convert any Figma to Shopify						
					
> 
						
							Bulk Hours for Shopify Tasks						
					
> 
						
							New Store Development						
					
> 
						
							Free Shopify Concept Design						
					

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Poppins` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
