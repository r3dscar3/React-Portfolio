const path = require('path');
const plugins = require('next-compose-plugins');

const nextConfig = {
  distDir: './dist',
  webpack: (config) => {
    config.resolve.modules = [
      'node_modules',
      path.join(__dirname, 'src'),
      'components',
      'icons',
      'utils',
      'pages',
      'queries',
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
      icons: path.resolve(__dirname, 'src/icons'),
      pages: path.resolve(__dirname, 'src/pages'),
      queries: path.resolve(__dirname, 'src/queries'),
    };

    return config;
  },
};

module.exports = plugins([], nextConfig);
