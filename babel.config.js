module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src', './assets', './app'],
          alias: {
            '@': './',
            '@assets': './assets',
            '@src-assets': './src/assets',
            '@shared': './src/shared',
            '@features': './src/features'
          },
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
            '.svg'
          ]
        }
      ],
      '@svgr/babel-plugin-transform-react-native-svg'
    ]
  };
};
