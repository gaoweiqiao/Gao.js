/**
 * Created by patrick on 2018/2/19.
 */
var path = require('path');
var webpack = require('webpack');
module.exports={
    module:{
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: [ // 忽略这里面的文件
                    path.resolve(__dirname, 'dist'),
                    path.resolve(__dirname, 'test'),
                    path.resolve(__dirname, 'node_modules'),
                ],
            },
        ]
    }
};