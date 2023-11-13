const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  webpack: (config) => {
    config.module.rules.push({ parser: { system: false } });

    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    config.output.path = path.resolve(__dirname, "build");
    config.output.libraryTarget = "system";

    config.plugins.push(
      new CopyPlugin([
        {
          from: path.resolve(__dirname, "src/importmap.json"),
          to: path.resolve(__dirname, "build/importmap.json"),
        },
      ])
    );

    config.externals = ["react", "react-router-dom", "browse", "restaurant"];

    return config;
  },
};
