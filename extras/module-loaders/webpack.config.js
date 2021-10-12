let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? false : 'source-map',
    entry: "./js/scripts.js",
    output: {
        path: __dirname + "/js",
        filename: "scripts.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};