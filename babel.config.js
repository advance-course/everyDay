module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: './src/components',
          element: './src/components/element',
          pages: './src/pages'
        }
      }
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}]
  ]
};
