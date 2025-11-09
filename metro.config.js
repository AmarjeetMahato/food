// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

// Use POSIX paths for compatibility on Windows + Linux (EAS)
const projectRoot = __dirname.replace(/\\/g, "/");

const config = getDefaultConfig(projectRoot);

// Optional safety for monorepos or nested dirs
config.watchFolders = [path.resolve(projectRoot)];

module.exports = withNativeWind(config, { input: "./global.css" });
