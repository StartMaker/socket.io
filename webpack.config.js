const path = require('path');
//处理模板html自动引入JS
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, "./src/index.js")
    },
    output: {
        filename: '[name].js',//名字已入口entry 名字命名
        path: path.join( __dirname, 'dist'),//输出文件的路径
        publicPath: '/',
        chunkFilename: "[name].js",
        libraryTarget: 'var',
        library: 'XLSX'
    },
    node: {
        process: false,
        Buffer: false
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    'astroturf/loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 6000
                        }
                    },
                    {
                        loader:'@svgr/webpack',
                        options:{
                            babel: true,
                            icon: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            }
        ]
    },
    // 输出源码
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".json", ".jsx"],
        alias: { "./dist/cpexcel.js": "" }
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        //清除文件
        new CleanWebpackPlugin(['dist']),
        //设置默认环境变量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            },
            'process.env.NODE_ENV': "development",
            LOCAL_ROOT: JSON.stringify("http://ziksang.com")
        }),
        new HtmlWebpackPlugin({
            template: "./src/index-template.html",
            inject: true,
            filename: "index.html",
            hash: true
        }),
        new ExtractTextWebpackPlugin({ // 在plugins中配置属性
            filename: 'css/[name].css' // 配置提取出来的css名称
        }),
        //配合devServer 实现热更新
        new webpack.HotModuleReplacementPlugin()
    ]
};