const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules)/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    resolve: {
        // 파일 확장자 처리
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    target: ['web', 'es5'],
    devServer: {
        contentBase: './',
        publicPath: '/dist',
        port: 3000
    },
    optimization: {
        minimize: false // 소스맵 압축을 할 것인가?
    }
}