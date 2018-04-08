const CopyWebpackPlugin = require("copy-webpack-plugin");
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require("path");

module.exports = {
    stats: {
        // Configure the console output
        errorDetails: true, //this does show errors
        colors: true,
        modules: true,
        reasons: true
    },
    
    entry: {
        "extension/js/extension": "./src/extension/app/app.tsx",
        "extension/js/background": "./src/extension/background/background.ts",
        "resources/sidebar": "./src/sidebar/app/app.tsx"
        
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: "./src/static/",
                to: "./"
            }
        ]),
        new FriendlyErrorsWebpackPlugin(),
    ],

    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        inline: true,
        hot: true,
        port: 9000,
        quiet: true,
    }
};