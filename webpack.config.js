require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
    entry: ['./src/index.ts','./src/util/util.ts','./src/util/step2.ts','./src/util/step3.ts',],
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // clean: true,
    },
    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader'},
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {injectType: 'singletonStyleTag'},
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                            name: 'images/[name].[ext]'
                        },
                    },
                ],
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'}),
        new miniCss({
            filename: '../style.css',
        })],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        // alias: {
        //     fundInfo: path.resolve(__dirname, 'src/util/fundData.ts'), todo not work??
        // }
    },
};