import '@storybook/addon-console'
// import "../src/index.css"
// import StoryRouter from 'storybook-react-router'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  // StoryRouter(),
]
