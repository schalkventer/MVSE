# YouTube thumbnail — SPA interactions without JavaScript

`thumbnail.png` (1280×720) for the video on building single-page-app style
interactions with CSS View Transitions and zero JavaScript, featuring
Schalk Venter and Justin Slack from FEDSA. Title on the thumbnail:
**"App-like animations with no JavaScript"**.

- `thumbnail.html` — the design source (plain HTML/CSS, fixed 1280×720 canvas).
- `render.mjs` — renders the HTML to `thumbnail.png` with Playwright
  (`npm i playwright && node render.mjs`).
- `assets/` — background-removed portraits and self-hosted fonts
  (Roboto).

Photo sources: Schalk's GitHub avatar and Justin's Sessionize speaker photo,
cut out with `rembg` (`birefnet-portrait` model).
