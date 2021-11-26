const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//Where the entry point is?
//Where's the final bundle file(output?
module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return {
    entry: './src/app.js',
    // entry: './src/playground/hoc.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'), //Absolute path to where to output the file
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
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true },
              },
              {
                loader: 'sass-loader',
                options: { sourceMap: true },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map', // Very expensive. Still want in production but can opt for a slower version
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
    },
  };
};
