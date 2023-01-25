/** @type {import('next').NextConfig} */
let path = require('path');

module.exports = {
  webpack(config, { buildId, dev, isServer, defaultLoaders }) {
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/i,
      use: [],
    });

    // https://github.com/facebook/react/issues/13991#issuecomment-435587809
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve('./node_modules/react'),
    };

    return config;
  },
};