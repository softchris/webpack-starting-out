var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry : ['./app/thirdparty',"./app/app.js"],
    output : {
        path: path.resolve('build/js'),
        publicPath: "/public/js/",
        filename : "bundle.js",
        
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                loader : "babel-loader"
            }
        ]
    },
    resolve : {
        extensions : [ '','.js','.es6' ]
    },
    include: path.join(__dirname, 'app')
}