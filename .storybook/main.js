module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: 
    [
      '@storybook/addon-storysource',
      '@storybook/addon-docs', 
      '@storybook/addon-a11y/register'
    ]
};
