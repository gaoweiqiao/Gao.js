/**
 * Created by patrick on 2018/2/7.
 */
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

module.exports = {
    // JavaScript 执行入口文件
    entry: ['babel-polyfill','./src/main.js'],
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'gao.min.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: [ // 忽略这里面的文件
                    path.resolve(__dirname, 'dist'),
                    path.resolve(__dirname, 'node_modules'),
                ],
            },
            //{
            //    test: require.resolve("./src/main.js"),
            //    loader: "expose-loader?Gao"
            //},
        ]
    },
    plugins:[
        new UglifyJSPlugin(),
        new DllReferencePlugin({
            manifest: require('./dist/polyfill.manifest.json')
        })
    ],
    devtool: 'source-map'
};