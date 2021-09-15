const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#EB0909',
              '@success-color': '#5CB051',
              '@body-background': '#090C10'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};