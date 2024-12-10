module.exports = {
  native: true,
  typescript: true,
  dimensions: true,
  expandProps: true,
  svgProps: {
    width: '{24}',
    height: '{24}',
  },
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
}
