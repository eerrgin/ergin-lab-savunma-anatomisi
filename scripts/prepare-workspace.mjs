#!/usr/bin/env node
/**
 * App Builder exports workspace instructions under grok/, while local preview
 * tooling reads .grok/. Fill only missing files so existing workspace overrides
 * remain authoritative. The generated destination is gitignored.
 */
import { existsSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "grok");
const target = join(root, ".grok");

function copyMissing(sourceDir, targetDir) {
  if (!existsSync(sourceDir)) return;
  mkdirSync(targetDir, { recursive: true });
  for (const entry of readdirSync(sourceDir, { withFileTypes: true })) {
    if (entry.name === "preview.log" || entry.name === "preview.pid") continue;
    const src = join(sourceDir, entry.name);
    const dest = join(targetDir, entry.name);
    if (entry.isDirectory()) {
      copyMissing(src, dest);
    } else if (entry.isFile() && !existsSync(dest)) {
      mkdirSync(dirname(dest), { recursive: true });
      copyFileSync(src, dest);
    }
  }
}

copyMissing(source, target);
console.log("[workspace] Grok workspace files are available; local overrides were preserved.");
