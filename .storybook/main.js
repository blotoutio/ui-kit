module.exports = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  previewHead: (head) => `
    ${head}
    <style>
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: url('/font/Inter-roman.var.woff2?v=3.18') format('woff2');
        font-named-instance: 'Regular';
      }

      html,
      #root,
      body {
        font-family: 'Inter', sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    </style>
  `,
  core: {
    builder: 'webpack5',
  },
}
