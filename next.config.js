const path = require('path');
const plugins = require('next-compose-plugins');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  env: {
    API_URL: isProd ? 'https://api.pgdbend.com' : 'http://localhost:4000';
  },
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['icons'] = path.join(__dirname, 'icons');
    return config;
  },
}

module.export = plugins(nextConfig);