import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const catalog = [
  {
    id: "gcc-windows-x64",
    kind: "cpp",
    version: "14.2.0",
    platform: "win32",
    arch: "x64",
    archiveFormat: "zip",
    executableRelativePath: "bin/g++.exe",
    licenseFiles: ["COPYING3", "COPYING.RUNTIME", "SOURCE.txt"],
    filename: "themis-gcc-windows-x64-14.2.0.zip",
  },
  {
    id: "python-windows-x64",
    kind: "python",
    version: "3.12.13",
    platform: "win32",
    arch: "x64",
    archiveFormat: "zip",
    executableRelativePath: "python.exe",
    licenseFiles: ["LICENSE.txt"],
    filename: "themis-python-windows-x64-3.12.13.zip",
  },
  {
    id: "python-macos-x64",
    kind: "python",
    version: "3.12.13",
    platform: "darwin",
    arch: "x64",
    archiveFormat: "tar.gz",
    executableRelativePath: "bin/python3",
    licenseFiles: ["lib/python3.12/LICENSE.txt"],
    filename: "themis-python-macos-x64-3.12.13.tar.gz",
  },
  {
    id: "python-macos-arm64",
    kind: "python",
    version: "3.12.13",
    platform: "darwin",
    arch: "arm64",
    archiveFormat: "tar.gz",
    executableRelativePath: "bin/python3",
    licenseFiles: ["lib/python3.12/LICENSE.txt"],
    filename: "themis-python-macos-arm64-3.12.13.tar.gz",
  },
];

function sha256(filePath) {
  const hash = crypto.createHash("sha256");
  hash.update(fs.readFileSync(filePath));
  return hash.digest("hex");
}

const outputDirectory = path.resolve(process.argv[2] || "dist-toolchains");
const releaseBaseUrl = (
  process.env.TOOLCHAIN_RELEASE_BASE_URL ||
  "https://github.com/ducminh25/themis-v2-downloads/releases/download/toolchains-v1"
).replace(/\/$/, "");

const toolchains = catalog.map(({ filename, ...entry }) => {
  const filePath = path.join(outputDirectory, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing toolchain artifact: ${filename}`);
  }
  return {
    ...entry,
    downloadUrl: `${releaseBaseUrl}/${filename}`,
    sha256: sha256(filePath),
    sizeBytes: fs.statSync(filePath).size,
  };
});

const manifestPath = path.join(outputDirectory, "toolchains-manifest.json");
fs.writeFileSync(
  manifestPath,
  `${JSON.stringify(
    {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      toolchains,
    },
    null,
    2,
  )}\n`,
);

const checksumFiles = [
  ...catalog.map(({ filename }) => filename),
  path.basename(manifestPath),
].sort();
const checksums = checksumFiles
  .map((filename) => `${sha256(path.join(outputDirectory, filename))}  ${filename}`)
  .join("\n");
fs.writeFileSync(path.join(outputDirectory, "SHA256SUMS"), `${checksums}\n`);

console.log(`Generated a manifest with ${toolchains.length} verified packages.`);

