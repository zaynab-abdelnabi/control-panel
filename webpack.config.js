const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
    entry:
    {
        'dist': './src/index.js',
        'assets/js/banner': './src/assets/js/banner.js',
        'assets/js/tabs': './src/assets/js/tabs.js',
        'assets/js/upload': './src/assets/js/upload.js',
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
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                exclude: /images/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "assets/fonts",
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                exclude: /fonts/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "images",
                        },
                    },
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
        new HtmlWebpackPlugin({
            template: './src/components/list.html',
            filename: 'components/list.html',
            chunks: ['dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/components/tabs.html',
            filename: 'components/tabs.html',
            chunks: ['dist', 'assets/js/tabs'],
        }),
        new HtmlWebpackPlugin({
            template: './src/components/upload.html',
            filename: 'components/upload.html',
            chunks: ['dist', 'assets/js/upload'],
        }),
        new HtmlWebpackPlugin({
            template: './src/components/help.html',
            filename: 'components/help.html',
            chunks: ['dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/components/summary.html',
            filename: 'components/summary.html',
            chunks: ['dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/components/actions.html',
            filename: 'components/actions.html',
            chunks: ['dist'],
        }),
    ],

};