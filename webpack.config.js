import path from 'path';

module.exports = {
  context: __dirname + "/app",
  entry: "./ec_entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'electron']
        }
      }
    ]
  }
}
