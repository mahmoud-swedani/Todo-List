const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#4292D8",
              "@success-color": "#1de90f",
              "@warning-color": "#EB3737",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
