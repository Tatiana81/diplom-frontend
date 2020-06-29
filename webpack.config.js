const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/js/index.js',
    homepage: './src/js/homepage.js',
  },
    output: {
      filename: 'js/[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
        {
          test: /\.css$/iu,
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          }, 'css-loader', 'postcss-loader'],
        },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            }
        ]
    },
    resolve: {
        modules: [__dirname + '/src/pages', __dirname + '/node_modules', __dirname + '/src/js', __dirname + '/src/images']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].[contenthash].css',
      }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { preset: ['default'] },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/homepage.html',
            filename: 'homepage.html'
        }),
    ]
};