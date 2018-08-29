const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let conf = {
    entry: {
        admin: './src/js/admin.js',
        visitor: './src/js/visitor.js',
        style: './src/css/style.less'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'build')
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
        new ExtractTextPlugin({filename: './css/styles.css'}),

        new CleanWebpackPlugin(['build']),

        new CopyWebpackPlugin(
            [
                {from: './src/html', to: './'}
            ],
            {
                ignore: [
                    {glob: 'fragments.html'}
                ]
            }
        ),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                commons: {
                    test: /\.js$/,
                    chunks: 'all',
                    name: 'common',
                    enforce: true,
                },
            },
        }
    }
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? false : 'eval-sourcemap';
    return conf;
}