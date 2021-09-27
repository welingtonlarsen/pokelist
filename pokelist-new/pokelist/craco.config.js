const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#0072BC',// blue
              '@success-color': '#5CB051', // green
              '@body-background': '#090C10' // high blue (black +-)
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};