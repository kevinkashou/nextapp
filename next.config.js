const path = require('path');

module.exports = {
  webpack(config, options) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        atoms: path.resolve(__dirname, 'components/atoms'),
        molecules: path.resolve(__dirname, 'components/molecules'),
        organisms: path.resolve(__dirname, 'components/organisms'),
        svgs: path.resolve(__dirname, 'assets/svgs'),
      },
    };

    return config;
  },
};
