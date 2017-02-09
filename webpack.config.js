module.exports = {
  entry: './roman-numerals.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: './roman-numerals-test.js',
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};
