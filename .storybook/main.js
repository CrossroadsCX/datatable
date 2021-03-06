require('@storybook/addon-postcss')
const path = require('path')

module.exports = {
  "stories": [
    "../examples/**/*.stories.tsx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    // "@storybook/preset-create-react-app"
  ],
}
