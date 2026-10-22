# Insecto favicon concepts

Favicon concepts and the website icon. `src/app/icon.png` currently uses the original Astra window-grid icon supplied as `download.svg`, exported at 512 × 512 for the website. The editable source is saved as `00-original-astra.svg`. The refined 3 × 3 square-grid concept is saved as `01-mreza.svg` and `01-mreza-512.png`.

The background uses the canonical brand color `#1E3B6F` from `src/app/tokens.css`. White marks and a rounded square create a consistent silhouette on light and dark browser chrome. SVG sources contain vector paths only, with no font, script, or external asset dependencies. Each concept also has a 512 × 512 PNG export.

- **01-mreza:** Refined 3 × 3 grid proposal. The original nine-square design retains its outside dimensions. Each blue square is about 17% wider than in the initial proposal. On its 192-unit canvas, squares are 28 units wide; the white outer border and all white gaps between squares are exactly 15 units. The grid connects directly to the frame, with no separate blue inset.
- **02-plise:** A framed pleated-screen motif. More explicit about the folding mechanism; the fine diagonals are less clear at 16 px.
- **03-inicijal:** The exact lowercase `i` outline extracted from the existing `public/insecto-logo.svg`, centered on the brand tile. Closest to the wordmark, although the isolated character can also suggest an information symbol.

`predlozi.png` and its SVG source show enlarged concepts, actual raster samples at 16/32/48 px, and simulated light/dark browser tab rows. These are design mockups, not screenshots of a deployed website.

Generate the Next.js icon asset from the selected SVG. Keep the master SVG as the editable source; do not resize a small PNG to make larger exports.
