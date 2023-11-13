const path = require("path");

module.exports = {
  webpack: (config) => {
    config.module.rules.push({ parser: { system: false } });

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

    // config.externals = {
    //   react: 'promise window.getDependency("react")',
    //   "styled-components": 'promise window.getDependency("styled-components")',
    //   "react-router-dom": 'promise window.getDependency("react-router-dom")',
    // };
    
    console.log(config);
    config.externals = ["react", "react-router-dom", "styled-components"];
    return config;
  },
};
