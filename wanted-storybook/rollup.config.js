import esbuild from "rollup-plugin-esbuild";
import peerExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json" assert { "type": "json" };

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.exports["."].require,
      format: "cjs",
    },
    {
      file: pkg.exports["."].import,
      format: "esm",
    },
  ],
  plugins: [
    esbuild({
      include: /\.[j]sx?$/,
      minify: process.env.NODE_ENV === "production",
      jsx: "automatic",
    }),
    peerExternal(),
  ],
};
