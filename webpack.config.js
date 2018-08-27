const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let conf = {
    entry: ['./src/js/homework.js', './src/css/style.less'],
    output: {
        filename: 'homework_bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        contentBase: './build',
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                use: 'html-es6-template-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css'
        })
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? false : 'eval-sourcemap';
    return conf;
}