---
name: Lone Melodies
description: Book landing page for Unspoken Love by Charan Sai Ponnada
colors:
  dark: oklch(7% 0.015 55)
  surface: oklch(9% 0.02 50)
  elevated: oklch(11% 0.025 50)
  warm-cream: oklch(93% 0.025 75)
  amber: oklch(65% 0.14 75)
  amber-dim: oklch(55% 0.12 75)
  leather: oklch(28% 0.04 55)
  leather-mid: oklch(42% 0.06 60)
  text-primary: oklch(92% 0.015 75)
  text-secondary: oklch(70% 0.03 65)
  text-muted: oklch(50% 0.03 60)
  ink: oklch(85% 0.02 70)
  border: oklch(20% 0.02 55)
  border-light: oklch(15% 0.015 50)
typography:
  display:
    fontFamily: Pinyon Script, cursive
    fontSize: clamp(3.5rem, 8vw, 6.25rem)
    fontWeight: 400
    lineHeight: 0.9
  headline:
    fontFamily: Cormorant Garamond, Georgia, serif
    fontSize: clamp(2rem, 4vw, 3.25rem)
    fontWeight: 300
    lineHeight: 1.15
  title:
    fontFamily: Cormorant Garamond, Georgia, serif
    fontSize: clamp(1.125rem, 2vw, 1.5rem)
    fontWeight: 300
    lineHeight: 1.4
  body:
    fontFamily: Cormorant Garamond, Georgia, serif
    fontSize: clamp(1rem, 1.5vw, 1.125rem)
    fontWeight: 400
    lineHeight: 1.8
  italic:
    fontFamily: Cormorant Garamond, Georgia, serif
    fontSize: clamp(1rem, 1.5vw, 1.125rem)
    fontWeight: 400
    fontStyle: italic
    lineHeight: 2
  label:
    fontFamily: DM Sans, Helvetica, sans-serif
    fontSize: 0.6875rem
    fontWeight: 400
    letterSpacing: 0.25em
    textTransform: uppercase
  small:
    fontFamily: DM Sans, Helvetica, sans-serif
    fontSize: 0.625rem
    fontWeight: 300
    letterSpacing: 0.2em
    textTransform: uppercase
rounded:
  none: 0
  sm: 2px
  md: 4px
spacing:
  section: clamp(5rem, 10vw, 8rem)
  section-mobile: 3rem
  gutter: clamp(2rem, 6vw, 5rem)
  stack: 1.5rem
  stack-xs: 0.75rem
  stack-sm: 1rem
  stack-lg: 2.5rem
---
# Design System: Lone Melodies

## 1. Overview

**Creative North Star: "The Unspoken Room"**

This is not a stage. It is a room with worn furniture, amber lamplight, and the particular silence that means someone is listening. The visitor arrives not to be sold a book but to inhabit the emotional space the book creates. Every element — the grain of the type, the weight of the margins, the texture beneath the surface — exists to make that room feel real.

The system is warm, deep, and unhurried. It rejects the polished efficiency of modern web design in favor of something slower: a literary cadence, physical texture, and the kind of quiet that draws you closer. If the interface feels like it was built in a hurry, it has already failed.

**Key Characteristics:**
- Warm and enveloping — amber light, leather textures, deep brown shadows
- Quiet and unhurried — generous spacing, restrained motion, room to breathe
- Literary and physical — typography carries the emotional weight; nothing decorative
- Intimate rather than impressive — the scale draws you in rather than shouting
- Tactile warmth — the dark mode should feel like a dimly lit room, not a terminal

## 2. Colors: The Unspoken Room Palette

A warm, enveloping palette built from amber lamplight, deep leather tones, and cream pages. The darkness is not cold black but the rich brown-black of a room at night with a single lamp burning.

### Primary
- **Amber** (oklch(65% 0.14 75)): The lamplight. Used for the headline accent, the signature gold of the brand, hover states, and the single warm point of focus on each screen. Rare enough to matter.
- **Amber Dim** (oklch(55% 0.12 75)): The lamp glow on surrounding surfaces. Secondary accents, borders that need warmth without competing.

### Neutral
- **Dark** (oklch(7% 0.015 55)): The room at night. Primary background. A deep warm-black, never #000.
- **Surface** (oklch(9% 0.02 50)): Raised surfaces, cards, containers. Slightly lighter than the room, still part of the darkness.
- **Elevated** (oklch(11% 0.025 50)): The desk in the lamplight. Hover states, active surfaces, input backgrounds.
- **Warm Cream** (oklch(93% 0.025 75)): The page. Used for body text and primary light elements. Warm, never white.
- **Leather** (oklch(28% 0.04 55)): The worn chair. Accent backgrounds (quote strip, notification bar), solid color blocks.
- **Leather Mid** (oklch(42% 0.06 60)): A lighter leather. Section labels, secondary backgrounds.
- **Text Primary** (oklch(92% 0.015 75)): Main body and headline text.
- **Text Secondary** (oklch(70% 0.03 65)): Supporting text, metadata, secondary navigation.
- **Text Muted** (oklch(50% 0.03 60)): Placeholder, captions, tertiary information.
- **Ink** (oklch(85% 0.02 70)): The ink on the page. Used for poetic copy and handwritten-style elements.
- **Border** (oklch(20% 0.02 55)): Subtle structural lines between elements.
- **Border Light** (oklch(15% 0.015 50)): Barely-there dividers, faint separation.

### Named Rules
**The Amber Rule.** Amber (the lamplight) appears exactly once per viewport as a focal point — the title's warmth, a hover glow, a single line shimmer. Its rarity is its power. Never use amber for body text, borders, or backgrounds.

**The No-Black Rule.** No #000 or #fff. Every dark surface is a warm brown-black. Every light surface is a cream. The room is never truly dark or truly bright; it is always warm.

## 3. Typography

**Display Font:** Pinyon Script (cursive)
**Editorial Font:** Cormorant Garamond (serif) with Georgia fallback
**UI Font:** DM Sans (sans-serif)

**Character:** A literary pairing of restrained elegance. Cormorant Garamond carries the emotional weight — its tall, delicate serifs and deep italic feel like a novel printed on cream paper. Pinyon Script adds the handwritten intimacy of a dedication page. DM Sans recedes into pure utility for labels and microcopy, never competing.

### Hierarchy
- **Display** (400, clamp(3.5rem, 8vw, 6.25rem), 0.9): Pinyon Script. The hero title only. One per page. Never used anywhere else.
- **Headline** (300, clamp(2rem, 4vw, 3.25rem), 1.15): Cormorant Garamond. Section titles. The quiet authority of a chapter heading.
- **Title** (300, clamp(1.125rem, 2vw, 1.5rem), 1.4): Cormorant Garamond. Card titles, excerpt labels. Subdued and literary.
- **Body** (400, clamp(1rem, 1.5vw, 1.125rem), 1.8): Cormorant Garamond. All reading text. Capped at 65–75ch. The reader should feel they're holding a book.
- **Italic** (400 italic, clamp(1rem, 1.5vw, 1.125rem), 2): Cormorant Garamond. Quotes, excerpts, poetic passages. The widest line height for maximum breathing room.
- **Label** (400, 0.6875rem, 1, 0.25em letter-spacing, uppercase): DM Sans. Section labels, stats, small metadata. Pure utility; never decorative.
- **Small** (300, 0.625rem, 1, 0.2em letter-spacing, uppercase): DM Sans. Copyright, footnotes, the smallest necessary text.

### Named Rules
**The One Script Rule.** Pinyon Script is reserved for the book title on the cover mockup and the hero heading. One usage per page. If a second script appears, the page has lost its discipline.

**The Reading Rule.** Body copy is Cormorant Garamond at 1rem minimum with 1.8 line height and 65–75ch max width. This is a reading experience; the typography must serve that before anything else.

## 4. Elevation

The system uses tonal layering rather than shadows. Depth is conveyed through warmth and lightness — surfaces closer to the lamplight are lighter and warmer. There are no drop shadows. The room is flat: surfaces exist on different planes of light, not different planes of space.

The book mockup is the single exception: it floats with a soft ambient shadow (oklch(0% 0 0 / 0.4) at 20px blur), treated as a physical object in the room rather than a UI element.

### Named Rules
**The Warmth-As-Depth Rule.** A surface closer to the user is warmer and lighter, not darker and shadowed. Elevated surfaces sit at oklch(11% 0.025 50); the room sits at oklch(7% 0.015 55). Light creates hierarchy, not shadow.

## 5. Components

### Buttons
- **Shape:** Flat rectangles. No border radius. The corners of a book.
- **Primary** — Background: Leather (oklch(28% 0.04 55)), text: Warm Cream (oklch(93% 0.025 75)), padding: 14px 36px. Label typography (11px uppercase, 3px letter-spacing). Hover: background shifts to Leather Mid (oklch(42% 0.06 60)), a gentle 0.3s ease. The hover fill slides in from the left, like ink bleeding into paper.
- **Secondary** — Background: transparent, border: 1px solid Border (oklch(20% 0.02 55)), text: Warm Cream. Hover: border shifts to Amber, text shifts to Amber. The single amber accent on the page.
- **Focus:** Outline ring at 2px Amber with 2px offset.

### Book Mockup
- **Shape:** 3px left spine, 12px right edge. The spine is Dark (oklch(7% 0.015 55)), the cover is a gradient from Leather to deeper brown-black.
- **Physical object behavior:** Floats gently (6s ease-in-out), tilts -2deg. A single ambient shadow underneath. Not a UI card — a real book on a table.
- **Typography on cover:** Pinyon Script for title, Cormorant Garamond for author, all in Warm Cream and Amber.

### Quote Marquee
- **Background:** Full-width Leather (oklch(28% 0.04 55)) strip. No cards, no borders. Pure typographic movement.
- **Text:** Cormorant Garamond italic at 15px, Ink (oklch(85% 0.02 70)) color. Separated by Amber diamonds (✦).
- **Animation:** 30s linear infinite scroll. Fade edges via gradient overlays.

### Excerpt Cards
- **Shape:** Full background fill at Surface (oklch(9% 0.02 50)). No radius. No border. No shadow. A page from the book laid flat.
- **Hover:** Background shifts to Elevated (oklch(11% 0.025 50)). A 2px line of Leather Mid animates in from the left as the hover reveal — like a bookmark.
- **Typography:** Large faded number (Cormorant Garamond 72px, Leather at low opacity). Quote text in Cormorant Garamond italic. Source in Label typography at Leather Mid.

### Input
- **Style:** Border only — 1px Border (oklch(20% 0.02 55)), background matches section background. Flat, inset, unassuming.
- **Focus:** Border shifts to Amber. No glow, no ring, no background change.
- **Error:** Border shifts to a warm red (oklch(55% 0.18 30)). Text color same.
- **Placeholder:** Text Muted (oklch(50% 0.03 60)) at 14px Cormorant Garamond italic.

### Author Visual
- **Shape:** A rectangular panel (240x300), gradient from Leather to Dark. A monogram initial in Pinyon Script at large scale (120px, low opacity). The author handle below in Label typography.
- **Not an avatar.** A bookplate. An ex libris stamp. The physical mark of ownership.

### Section Dividers
- No visible dividers between sections. Transition via a thin gradient line (transparent → Amber at 0.2 opacity → transparent) at the top of alternating sections. The line is 1px, never more. It is not a border — it is the edge of the page catching the lamplight.

## 6. Do's and Don'ts

### Do:
- **Do** use Amber exactly once per viewport as the focal point. Rarity is its power.
- **Do** let Cormorant Garamond carry the emotional weight. It is the voice of the book.
- **Do** keep the dark warm. Tint every dark surface with a brown hue (chroma 0.015–0.025 at lightness 7–11%).
- **Do** use generous top and bottom padding on sections (clamp(5rem, 10vw, 8rem)). The space between sections is not wasted; it is silence.
- **Do** cap body text at 65–75ch. Reading comfort over layout convenience.
- **Do** use the tonal layering system (warmth = depth) instead of drop shadows.
- **Do** treat motion as a whisper: fade-ups, gentle reveals, ease-out-quart curves.

### Don't:
- **Don't** use #000 or #fff. Every dark is warm; every light is cream.
- **Don't** use em dashes. Use commas, colons, or periods.
- **Don't** use side-stripe borders (border-left/right as colored accent). Use full backgrounds or nothing.
- **Don't** use gradient text (background-clip: text). One solid color per element.
- **Don't** use glassmorphism, blur effects, or translucent overlays. The room is solid.
- **Don't** use the hero-metric template (big number, small label, supporting stats). That is SaaS, not literature.
- **Don't** use identical card grids with icon + heading + text. Every excerpt card is a distinct page.
- **Don't** use modals. Inline reveals or nothing.
- **Don't** use bounce or elastic easing. Exponential ease-out only (quart, quint, expo).
- **Don't** animate CSS layout properties (width, height, top, left, margin, padding).
- **Don't** use a container wrapper around every element. Most things don't need one.
- **Don't** use Pinyon Script more than once per viewport. It is the dedication signature, not the body font.
