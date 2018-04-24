const path = require('path');
const webpack = require('webpack');
const SETTINGS = require('./settings');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const fileNamePrefix = production ? '.[chunkhash]' : '';

const pluginsBase = [
  // new OfflinePlugin(), // async preload chunks
  new HtmlWebpackPlugin({
    template: './src/index.html',
    title: 'Pokedex',
    filename: 'index.html',
    excludeChunks: ['base'],
    minify: {
      collapseWhitespace: true,
      collapseInlinespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
    },
    inject: 'body',
  }),
  new FaviconsWebpackPlugin({
    logo: './favicon.png',
    background: SETTINGS.THEME_COLOR,
    icons: SETTINGS.FAVICONS,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
    },
  }),
];

const developmentPlugins = [
  ...pluginsBase,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  // new OpenBrowserPlugin({ url: `http://localhost:${SETTINGS.PORT}` }),
];
const productionPlugins = [
  ...pluginsBase,
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  }),
  // new ManifestPlugin(),
  // new ChunkManifestPlugin({
  //   filename: 'chunk-manifest.json',
  //   manifestVariable: 'webpackManifest',
  // }),
  new WebpackChunkHash(), //webpack-chunk-hash
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: m => m.context && m.context.includes('node_modules'),
    filename: 'js/vendor/vendor.[chunkhash].js',
    // filename: 'vendor.js',
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime',
    chunks: ['vendor'],
    minChunks: Infinity,
    filename: 'js/runtime/runtime.[chunkhash].js',
    // filename: 'vendor.js',
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: 2,
    children: true,
    filename: 'js/common/[name].[chunkhash].js',
    // filename: 'vendor.js',
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  //   new PurifyCSSPlugin({
  //     // Give paths to parse for rules. These should be absolute!
  //     paths: glob.sync(path.join(__dirname, 'src/*.html')),
  //     minimize: true,
  //   }),
  new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    // filename: 'styles/[name].css',
    allChunks: true,
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: true,
    sourcemap: true,
    compress: {
      warnings: false, // Suppress uglification warnings
      pure_getters: true,
      conditionals: true,
      join_vars: true,
      if_return: true,
      unsafe: true,
      sequences: true,
      booleans: true,
      loops: true,
      unused: false,
      drop_console: true,
      unsafe_comps: true,
      screw_ie8: true,
    },
    output: {
      comments: false,
    },
    exclude: [/\.min\.js$/gi], // skip pre-minified libs
  }),
];

const configDev = {
  app: [
    'react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './src/index.jsx',
  ],
};

const configProd = {
  app: './src/index.jsx',
  vendor: [
    'react',
    'redux',
    'react-dom',
    'react-router-dom',
    'styled-components',
  ],
};

const config = production ? configProd : configDev;

module.exports = {
  context: __dirname,
  entry: {
    app: config.app,
    vendor: configProd.vendor,
  },
  output: {
    filename: `js/[name]${fileNamePrefix}.js`,
    chunkFilename: 'js/chunks/chunk[name][chunkhash].js',
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
    // filename: '[name].bundle.js',
  },
  plugins: production ? productionPlugins : developmentPlugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          // 'react-hot-loader',
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'transform-class-properties',
              ],
              presets: ['env', 'react'],
            },
          },
        ],
      },
      {
        test: /\.jsx?/,
        loader: 'stylelint-custom-processor-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'img-loader',
          options: {
            enabled: process.env.NODE_ENV === 'production',
            gifsicle: {
              interlaced: false,
            },
            mozjpeg: {
              progressive: true,
              arithmetic: false,
            },
            optipng: false, // disabled
            pngquant: {
              floyd: 0.5,
              speed: 2,
            },
            svgo: {
              plugins: [
                { removeTitle: true },
                { convertPathData: false },
              ],
            },
          },
        },
      },
    ],
  },

  devServer: {
    port: SETTINGS.PORT,
    compress: true,
    disableHostCheck: true,
    inline: true,
    hot: true,
    // watchContentBase: true,
    // contentBase: path.join(__dirname, 'dist'),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    // // show compile errors
    overlay: true,
    publicPath: '/',
    // webpack build logs config
    stats: {
      colors: true,
      reasons: true,
      chunks: false,
    },
  },

  // devtool: production ? 'cheap-module-eval-source-map' : 'source-map',
  devtool: production ? false : 'cheap-module-eval-source-map',
  // devtool: production ? 'cheap-module-source-map' : 'source-map',
  cache: false,
  resolve: {
    modules: [
      path.join(__dirname, 'dist'),
      'node_modules', 'shared',
    ],
    extensions: ['.js', '.jsx', '.json', '*'],
  },
};
