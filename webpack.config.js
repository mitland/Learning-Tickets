var path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['babel-preset-es2015','babel-preset-react','babel-preset-stage-0']
          }
        },
        {
          test: /\.jsx?$/,
          loader: "eslint-loader",
          exclude: /node_modules/,
        }
    ]     
  }
};
