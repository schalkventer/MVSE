# Motion on the Modern Web

### A Practical Guide to CSS Transitions and Animations (2026 Edition)

> A book outline covering CSS-native motion from first principles through the
> features that became baseline-available in 2024–2026: scroll-driven
> animations, the View Transitions API, `@starting-style`, discrete property
> animation, and animating to intrinsic sizes.

---

## Front Matter

- **Preface** — Why CSS-native motion matters in 2026: less JavaScript, better
  performance, motion that runs off the main thread.
- **Who this book is for** — Front-end developers, designers who code, and
  design engineers comfortable with HTML/CSS.
- **How to use this book** — Each chapter pairs concepts with runnable demos
  and a "support & fallbacks" note.
- **A note on browser support** — How to read Baseline status, and the
  progressive-enhancement mindset used throughout.

---

## Part I — Foundations

### Chapter 1: The Vocabulary of Motion
- Transitions vs. animations: when to reach for each.
- The four jobs of motion: feedback, continuity, orientation, and delight.
- A short history: from jQuery `.animate()` to the compositor.
- The rendering pipeline: layout, paint, composite — and why it dictates
  smoothness.

### Chapter 2: How the Browser Animates
- The main thread vs. the compositor thread.
- "Cheap" properties (`transform`, `opacity`, `filter`) vs. expensive ones.
- What triggers layout, paint, and composite (reflow/repaint cost).
- The `will-change` property: a scalpel, not a hammer.
- Measuring jank with DevTools performance panels.

---

## Part II — Transitions

### Chapter 3: CSS Transitions in Depth
- The `transition` shorthand and its longhand properties.
- `transition-property`, `-duration`, `-timing-function`, `-delay`.
- Transitioning multiple properties with independent timing.
- Common gotchas: transitioning `display`, `height: auto`, and unset values.

### Chapter 4: Timing Functions and Easing
- Built-in keywords and the cubic-bézier curve.
- Authoring custom curves with `cubic-bezier()`.
- `steps()` for sprite and typewriter effects.
- **`linear()`** — approximating springs, bounces, and arbitrary curves.
- Choosing easing that matches physical intuition.

### Chapter 5: Transitioning the "Impossible"
- **`transition-behavior: allow-discrete`** — animating `display`,
  `visibility`, and other discrete properties.
- **`@starting-style`** — defining the "from" state for elements entering
  the DOM and the top layer.
- **`interpolate-size: allow-keywords`** and **`calc-size()`** — animating to
  and from `auto`, `min-content`, and `fit-content`.
- Putting it together: accordions, popovers, and toasts with zero JavaScript.

---

## Part III — Keyframe Animations

### Chapter 6: `@keyframes` and the `animation` Property
- Anatomy of a keyframe rule.
- The `animation` shorthand and all nine longhands.
- `animation-fill-mode`, `-direction`, `-iteration-count`, `-play-state`.
- Multiple animations on one element and how they compose.

### Chapter 7: Controlling and Composing Animations
- **`animation-composition`**: `replace`, `add`, and `accumulate`.
- Sequencing with delays vs. chaining via events.
- Pausing, resuming, and reversing.
- Reusable keyframe libraries with custom properties.

### Chapter 8: Animating Custom Properties with `@property`
- Registering typed custom properties with `@property`.
- Why registration unlocks animating gradients, colors, and angles.
- Animated conic gradients, progress rings, and number counters.
- Performance considerations of `@property` animation.

---

## Part IV — The Modern Motion Toolkit

### Chapter 9: Scroll-Driven Animations
- **`animation-timeline`** — decoupling animation from time.
- **`scroll()`** anonymous timelines — progress tied to a scroll container.
- **`view()`** timelines — progress tied to an element entering the viewport.
- Named timelines: `scroll-timeline-name` and `view-timeline-name`.
- `animation-range`, `entry`, `exit`, and `cover` ranges.
- Recipes: reading progress bars, parallax, reveal-on-scroll, sticky stacks.
- Graceful degradation when timelines are unsupported.

### Chapter 10: The View Transitions API
- Same-document transitions with `document.startViewTransition()`.
- The pseudo-element tree: `::view-transition`, `-group`, `-image-pair`,
  `-old`, and `-new`.
- `view-transition-name` and matching elements across states.
- **Cross-document view transitions** with `@view-transition` for multi-page
  apps and classic server-rendered sites.
- Customizing transitions with keyframes; per-element choreography.
- Framework integration patterns (SPA routers and MPA navigations).

### Chapter 11: Anchor Positioning and Motion
- `anchor()` and `position-anchor` fundamentals.
- Animating tethered tooltips, menus, and popovers.
- Combining anchor positioning with `@starting-style` for entrance motion.

### Chapter 12: Motion Beyond CSS — The Web Animations API
- When CSS isn't enough: dynamic, data-driven, or interactive motion.
- `Element.animate()` and the `Animation` object.
- Reading and scrubbing playback; `getAnimations()`.
- Bridging WAAPI with CSS scroll timelines.
- A decision guide: CSS vs. WAAPI vs. a JS animation library.

---

## Part V — Craft, Performance, and Accessibility

### Chapter 13: Performance Engineering for Motion
- Sticking to compositor-friendly properties.
- Avoiding layout thrash and forced synchronous reflows.
- Containment (`contain`, `content-visibility`) and animation cost.
- Budgeting for 60fps (and 120fps) on low-end devices.
- Profiling workflow: record, identify long frames, fix, verify.

### Chapter 14: Accessible Motion
- **`prefers-reduced-motion`** — designing reduced and full experiences.
- Vestibular disorders and motion-triggered discomfort.
- Pausing, stopping, and hiding controls for moving content (WCAG 2.2).
- Respecting `prefers-reduced-data` and battery/CPU constraints.
- Motion that conveys meaning vs. motion that decorates.

### Chapter 15: Design Principles for Tasteful Motion
- Duration and easing scales as design tokens.
- Spatial models: where elements come from and go to.
- Choreography and staggering for grouped elements.
- Consistency through a documented motion system.
- Knowing when not to animate.

---

## Part VI — Putting It All Together

### Chapter 16: Building a Motion Design System
- Defining tokens: durations, easings, distances.
- Packaging reusable utilities and keyframe sets.
- Documenting motion in a living style guide.
- Testing motion: visual regression and reduced-motion snapshots.

### Chapter 17: Case Studies
- An e-commerce product page: scroll reveals and add-to-cart feedback.
- A multi-page marketing site with cross-document view transitions.
- A dashboard: animated charts, counters, and live updates.
- A mobile-first app shell with route transitions.

### Chapter 18: The Road Ahead
- Emerging specs and proposals to watch.
- Scroll-driven and view-transition features still stabilizing.
- Where CSS motion is heading after 2026.

---

## Back Matter

- **Appendix A** — Property and feature reference (transitions, animations,
  timelines, view transitions).
- **Appendix B** — Easing cookbook: ready-to-use `cubic-bezier()` and
  `linear()` curves.
- **Appendix C** — Browser support and Baseline status cheat sheet.
- **Appendix D** — Debugging and tooling (DevTools, animation inspectors).
- **Glossary** — Key terms.
- **Index**
