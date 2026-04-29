import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const cesiumSource = path.dirname(require.resolve("cesium/package.json"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(cesiumSource, "Build/Cesium/Workers"),
            to: "static/cesium/Workers",
          },
          {
            from: path.join(cesiumSource, "Build/Cesium/Assets"),
            to: "static/cesium/Assets",
          },
          {
            from: path.join(cesiumSource, "Build/Cesium/Widgets"),
            to: "static/cesium/Widgets",
          },
        ],
      })
    );

    return config;
  },
};

export default nextConfig;