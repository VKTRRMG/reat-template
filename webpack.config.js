const path = require("path");
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        /*query: {
          presets: ['es2015', 'react']
        },*/
        include: path.join(__dirname, 'src')
      },
    ]
  }
};
