const esbuild = require("esbuild");

const package_name = "EscualiAPI"
const version = "1.0.0"

const external = [
  "@minecraft/server",
  "@minecraft/server-ui",
  "@minecraft/server-admin",
  "@minecraft/server-gametest",
  "@minecraft/server-net",
  "@minecraft/server-common",
  "@minecraft/server-editor",
  "@minecraft/debug-utilities",
];
const initialMS = Date.now()
console.log(`Started bundling ${package_name}@${version}!`)

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outfile: "scripts/main.js",
    bundle: true,
    minify: false,
    format: "esm",
    external
  })
  .then(() => {
    console.log(`Bundling finished in ${Date.now() - initialMS} milliseconds!`);
  })
  .catch((error) => {
    console.error(error);
  });