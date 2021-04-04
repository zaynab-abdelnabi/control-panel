const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
    entry:
    {
        'dist': './src/index.js',
        'assets/js/banner': './src/assets/js/banner.js'
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8081,
        writeToDisk: true,
        open: true,
        stats: 'errors-only'
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                exclude: /images/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts'
                        }
                    }
                ]
            }
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.css',
        }),
        new OptimizeCssAssetsPlugin({}),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/components/button.html',
            filename: 'components/button.html',
            chunks: ['dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/components/textfield.html',
            filename: 'components/textfield.html',
            chunks: ['dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/components/card.html',
            filename: 'components/card.html',
            chunks: ['dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/components/banner.html',
            filename: 'components/banner.html',
            chunks: ['dist', 'assets/js/banner'],
        }),
    ],

};