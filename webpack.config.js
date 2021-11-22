const path = require('path');

//Where the entry point is?
//Where's the final bundle file(output?
module.exports = {
  entry: './src/app.js',
  // entry: './src/playground/hoc.js',
  output: {
    path: path.join(__dirname, 'public'), //Absolute path to where to output the file
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
};

// loader
