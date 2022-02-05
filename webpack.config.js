const { channel } = require('diagnostics_channel')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const ruleForJavaScript = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  options: {
    presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  },
}

const ruleForHtml = {
  test: /\.html$/,
  use: {
    loader: 'html-loader',
  },
}

const ruleFormCss = {
  test: /\.(s*)css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    'css-loader',
    {
      loader: 'sass-loader',
    },
  ],
}

const ruleFormFile = {
  test: /\.(png|gif|jpg|svg|jpeg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'assets/resources/[name].[ext]',
      },
    },
  ],
}

const rules = [ruleForJavaScript, ruleForHtml, ruleFormCss, ruleFormFile]

module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'

  return {
    entry: './src/frontend/index.js',
    devtool: isProduction ? 'hidden-source-map' : 'cheap-source-map',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        cacheGroups: {
          vendors: {
            name: 'vendors',
            chunks: 'all',
            reuseExistingChunk: true,
            priority: 1,
            filename: 'assets/vendor.js',
            enforce: true,
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
      minimize: isProduction ? true : false,
      minimizer: isProduction ? [new TerserPlugin()] : [],
    },
    module: {
      rules,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/app.css',
      }),
    ],
    devServer: {
      open: true,
      port: 3000,
      compress: true,
    },
  }
}
