const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: 'assets/image/[hash][ext][query]'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@utiles': path.resolve(__dirname, 'src/utiles/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@routers': path.resolve(__dirname, 'src/routers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@image': path.resolve(__dirname, 'src/assets/image/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css|.styl$/i,
                use: [MiniCssExtractPlugin.loader,
                  'css-loader',
                  'stylus-loader'
                ],
            },
            {
                test: /\.png|.svg$/,
                type: 'asset/resource'
            },
            {
                test: /\.woff|.woff2$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: '[name].[contenthash].[ext]',
                        outputPath: './assets/font/',
                        publicPath: '../assets/font/',
                        esModule: false
                    },
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: 'assets/[name].[contenthash].css'
            }
        ),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src', 'assets/image'), to: 'assets/image'},
            ]
        }),
        
    ],
    optimization : {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
}