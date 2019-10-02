const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
    mode: 'development',
    entry: `${SRC_DIR}/index.js`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use : {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css)$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        watchContentBase: true,
        contentBase: 'public',
        open: 'Google Chrome',
        port: 3000
    }
}