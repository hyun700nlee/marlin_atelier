import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "public", "images", "samples");

const palettes = [
  ["#f8f5ef", "#36557a", "#6f92bd", "#9f8fb7", "#748264"],
  ["#fffdf8", "#23384f", "#87a7c9", "#c1a3b5", "#7b8469"],
  ["#f2eee5", "#4e6f91", "#9bb6d6", "#7c5265", "#d8d0bd"],
  ["#f9f6ee", "#2f4a66", "#6b8fb6", "#b6aac9", "#87936f"],
  ["#f6f0e7", "#425f74", "#7c9dbf", "#ab91a9", "#6f7c5e"]
];

function pad(index) {
  return String(index).padStart(2, "0");
}

function svg({ index, variant }) {
  const palette = palettes[(index + variant) % palettes.length];
  const [bg, ink, blue, lavender, moss] = palette;
  const label = variant === 0 ? "Cover" : `Detail ${variant}`;
  const seed = index * (variant + 1);
  const rotate = (seed * 17) % 360;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500" role="img" aria-labelledby="title desc">
  <title id="title">Sample artwork ${pad(index)} ${label}</title>
  <desc id="desc">Generated placeholder artwork with hydrangea-inspired blue, lavender, moss, and ivory craft motifs.</desc>
  <rect width="1200" height="1500" fill="${bg}"/>
  <rect x="70" y="70" width="1060" height="1360" rx="34" fill="none" stroke="${ink}" stroke-opacity=".16" stroke-width="3"/>
  <g transform="translate(600 730) rotate(${rotate})">
    ${Array.from({ length: 18 }, (_, i) => {
      const angle = (i * 360) / 18;
      const color = i % 3 === 0 ? blue : i % 3 === 1 ? lavender : moss;
      return `<ellipse cx="0" cy="-255" rx="${90 + ((seed + i) % 4) * 12}" ry="238" fill="${color}" fill-opacity=".32" transform="rotate(${angle})"/>`;
    }).join("\n    ")}
    <circle r="270" fill="none" stroke="${ink}" stroke-opacity=".26" stroke-width="4"/>
    <circle r="174" fill="none" stroke="${blue}" stroke-opacity=".44" stroke-width="7"/>
    <circle r="78" fill="${bg}" fill-opacity=".74" stroke="${lavender}" stroke-width="5"/>
  </g>
  <g fill="none" stroke="${ink}" stroke-opacity=".22" stroke-width="3">
    <path d="M140 1230 C330 1120 470 1325 650 1205 S955 1130 1060 1258"/>
    <path d="M164 274 C342 380 476 174 646 292 S948 354 1040 226"/>
  </g>
  <g font-family="Inter, Arial, sans-serif" fill="${ink}">
    <text x="110" y="1304" font-size="26" font-weight="700">MARLIN SAMPLE</text>
    <text x="110" y="1350" font-size="42" font-family="Georgia, serif">Artwork ${pad(index)}</text>
    <text x="110" y="1394" font-size="24" opacity=".7">${label} placeholder</text>
  </g>
</svg>`;
}

await mkdir(outDir, { recursive: true });

for (let index = 1; index <= 30; index += 1) {
  const variants = [
    ["cover", 0],
    ["detail-01", 1],
    ["detail-02", 2]
  ];

  for (const [name, variant] of variants) {
    await writeFile(join(outDir, `artwork-${pad(index)}-${name}.svg`), svg({ index, variant }));
  }
}
