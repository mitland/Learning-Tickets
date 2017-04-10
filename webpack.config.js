var path = require('path');

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
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
        }
    ]     
  }
};