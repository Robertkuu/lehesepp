---
name: Lehesepp
description: Kavand, the draft sheet. Paper, ink and one leaf green; a site is drafted in front of the visitor, then finished.
colors:
  paper: "#f1f3ee"
  paper-2: "#e6eae3"
  paper-3: "#dce2d8"
  ink: "#0e1510"
  ink-2: "#4a544c"
  leaf: "#34b85a"
  leaf-hover: "#2ea551"
  leaf-ink: "#17703a"
  on-leaf: "#0e1510"
  on-leaf-2: "#133a20"
  danger: "#b42318"
  dark-paper: "#0c110e"
  dark-paper-2: "#131a15"
  dark-ink: "#e8ece5"
  dark-ink-2: "#a3aea5"
  dark-leaf: "#45c46b"
  dark-leaf-ink: "#6fd88e"
typography:
  display:
    fontFamily: "Bricolage Grotesque (opsz 96, wdth 88), ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.15rem, 8.2vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  section-title:
    fontFamily: "Bricolage Grotesque"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  item-title:
    fontFamily: "Bricolage Grotesque"
    fontSize: "1.5rem-2.75rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem-1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Schibsted Grotesk"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  frame: "6px"
  inner: "4px"
  hairline: "2px"
  pill: "999px"
  leaf: "0 100% 0 100%"
spacing:
  gutter-mobile: "16px"
  gutter-tablet: "24px"
  gutter-desktop: "40px"
  section: "80px / 128px"
  container: "1400px"
components:
  button-primary:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.on-leaf}"
    rounded: "{rounded.frame}"
    height: "48px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.leaf-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    height: "48px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    height: "48px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.frame}"
    height: "44px"
---

# Lehesepp design system

## Overview

Kavand (draft sheet). The site sells "I build a preview first, you only pay if you like it", so the page itself drafts and finishes things in front of the visitor: a live mini-site in the hero rebuilds around the visitor's business name, and a draft/finished comparison sits in the offer section. "Leht" means both page and leaf in Estonian; leaf green is the brand's only accent. Light by default; dark follows the OS.

## Colors

- **Paper / paper-2 / paper-3**: cool, slightly green-grey grounds. Never cream.
- **Ink / ink-2**: green-black text and its secondary (7:1 on paper).
- **Leaf** owns whole regions (the offer section, one bento cell, primary buttons) with ink text on it. White text on leaf is not allowed (fails contrast).
- **Leaf-ink** is the text-weight green for links, icons and the second headline line on paper.
- Sample sites inside demo frames (`src/components/samples/Samples.tsx`) have their own palettes and typefaces on purpose: café in Cormorant Garamond on cream with terracotta, salon in Bodoni Moda on blush with plum, car service in Big Shoulders on near-black with signal yellow, builder in expanded Archivo on concrete with burnt orange. They show that each business gets its own look. Their CTA colors must still pass 4.5:1.

## Typography

- Bricolage Grotesque, self-hosted and subset (Latin-1 plus Š š Ž ž), pinned to opsz 96 and wdth 88, weights 700 to 800. Used for every heading and the wordmark.
- Schibsted Grotesk for all text and UI (self-hosted, weights 400 to 600). It replaced Geist, which reads as a default.
- Headings use `text-balance`, body uses `text-pretty`, body measure 34 to 60ch.
- Tracking stays between -0.02em and -0.04em on display text. Emphasis by color (the leaf-ink second line), never a second family.

## Layout

- Container 1400px, gutters 16 / 24 / 40px. Sections 80px vertical on phones, 128px on desktop.
- Each section uses its own layout family: full-width headline plus split (hero), typographic index list (services), full-bleed leaf statement plus comparison (offer), one unbroken line (process), five-cell bento (why), photo/text split (about), sticky title plus accordion (FAQ), info plus form (contact).
- Mobile-first: every multi-column layout collapses to one column below `md`/`lg`. No horizontal scroll at 375px.
- No eyebrows, no section numbers.

## Elevation & Depth

Flat. Hierarchy comes from fields of color (paper-2, leaf, ink cells), not shadows. The only shadows: the comparison frame and the bento phone, both offset and tinted green-black.

## Shapes

One radius on the Lehesepp UI: 6px on frames, buttons, inputs and chips. Pills (999px) appear only on the process nodes, the call button circle and inside sample sites, whose own shape languages are part of their identity; 2px is the skip-link focus radius. The leaf mark (a square with two opposite corners fully rounded) is the only organic shape and is reused for the logo, the about placeholder and the form's success badge. Crop marks and dimension lines appear only around things that are being drafted.

## Components

- **Buttons**: primary leaf with ink text, secondary outlined. Press feedback `scale(0.97)` over 160ms. Labels are one intent each: "Küsi pakkumist" / "Get a quote" everywhere for contact.
- **Chips**: radio or checkbox inputs styled as 44px chips; checked = ink fill (demo) or leaf fill (form).
- **Inputs**: 48px, label above, error below in danger red with `aria-invalid` and `aria-describedby`.
- **Draft frame**: crop marks, a dimension line that measures the frame live, sample site inside.
- **Comparison**: draft and finished layers, seam driven by scroll and an invisible native range input for drag and keyboard.

## Do's and Don'ts

- Do keep motion on transform, opacity, clip-path and filter, with `cubic-bezier(0.23, 1, 0.32, 1)` for entrances and `cubic-bezier(0.77, 0, 0.175, 1)` for on-screen morphs. UI feedback stays under 300ms.
- Do gate hover motion behind `(hover: hover) and (pointer: fine)` and honor `prefers-reduced-motion`.
- Do keep content visible without JavaScript; scroll entrances only hide elements already known to be below the fold.
- Don't use prices, invented testimonials, client logos or fake metrics. The load-time figure in "Why" is measured live.
- Don't introduce a second accent color, gradients, glass, or cards for their own sake.
- Don't use em or en dashes in copy.
- Keep the tone professional and plain: no jokes, idioms or filler adjectives. Use "sina" in Estonian, consistently.
