const fs = require('fs');
const path = require('path');

module.exports = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: require.resolve('jquery'),
      use: [{
          loader: 'expose-loader',
          options: '$'
      }]
    });
    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
          const from = path.resolve(__dirname, '../template/object-auto-expand.js');
          const to = path.resolve(__dirname, '../dist/index.html');
          console.log();
          console.log('patching', from, to);
          fs.appendFileSync(to, `<script>${fs.readFileSync(from)}</script>`);
          console.log('done')
        });
      }
    });
    return config;
  },
};
