const path = require("path");

module.exports = {
  webpack: (config) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    config.output = {
      path: path.resolve(__dirname, "build"),
      libraryTarget: "umd",
    };
    config.externals = ["react", "react-router-dom", "styled-components"];
    return config;
  },
};
