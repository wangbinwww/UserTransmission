const path = require('path');
const nodeExternals = require('webpack-node-externals')

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    //mode: 'production', // 生产模式
    mode: 'development', // 开发模式
    //devtool: "source-map", // 开启调试
    entry: {
        main: path.resolve(__dirname, '../src/GLP-UT.js'), // 入口文件
    },
    output: {
        filename: "[name].[hash:2].js", // 打包后的文件名称
        path: path.resolve(__dirname, "../dist/js"), // 打包后的目录
    },
    target: "node",
    plugins: [
        new CleanWebpackPlugin(),

    ],
    externals: [
        nodeExternals(),
    ],
    // optimization: {
    //     minimize: true,//混淆
    // }



}