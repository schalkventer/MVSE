// Renders thumbnail.html to a 1280x720 PNG (YouTube's recommended thumbnail size).
// Usage: node render.mjs   (requires the `playwright` package)
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

await page.goto(pathToFileURL(path.join(dir, "thumbnail.html")).href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(dir, "thumbnail.png") });

await browser.close();
