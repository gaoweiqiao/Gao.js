const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');


module.exports = {
    // JavaScript 执行入口文件
    entry: {
        polyfill:['babel-polyfill']
    },
    output: {
        filename: '[name].dll.js',
        // 输出的文件都放到 dist 目录下
        path: path.resolve(__dirname, 'dist'),
        // 存放动态链接库的全局变量名称，例如对应 react 来说就是 _dll_react
        // 之所以在前面加上 _dll_ 是为了防止全局变量冲突
        library: '_dll_[name]',
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
        ]
    },
    plugins:[

        new DllPlugin({
            name: '_dll_[name]',
            // 描述动态链接库的 manifest.json 文件输出时的文件名称
            path: path.join(__dirname, 'dist', '[name].manifest.json'),
        }),
    ]

};