const path = require('path');


const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'../src/js/guigang1/demoGuigang1.js'),
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: "guigang1.js"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                include: path.resolve(__dirname,'../','src'),
                use: {
                    loader: "babel-loader",
                    options: {
                        // 如果用到class 则需要赋值一下内容
                        presets: [
                            [
                                '@babel/preset-env',
                                // "@babel/preset-react",
                                {
                                    useBuiltIns:"usage",
                                    corejs : {version:3},
                                    targets: { // 兼容的浏览器
                                        "chrome" :"58",
                                        "ie" :"9"
                                    }
                                }
                            ]
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                        ],
                        cacheDirectory:true
                    }
                },
            }
        ]
    },
    mode: "production",
    resolve: {
        extensions: ['.js'],
        alias: {
            '@':path.resolve(__dirname,'../','src')
        }
    },
    devtool: 'eval-source-map',
    devServer: {
        open: true,
        quiet: true
    },
    plugins: [
        // html,
        new CleanWebpackPlugin(),
        // html
    ]
}