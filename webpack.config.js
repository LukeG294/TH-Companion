const path = require('path');
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    entry: [
      "./src/scripts/homepage/homemod.ts",
      "./src/scripts/background.ts"
    ],
    mode:"development",
    module: {
        rules: [{
			test: /\.tsx?$/,
			use: "ts-loader",
			exclude: /node_modules/
		}]
    },
    resolve: {
        extensions:[".ts", ".tsx", ".js"],
        plugins: [
			new TsconfigPathsPlugin()
		]
    },
    output: {
        filename: 'homepage.js',
        path: path.resolve(__dirname, 'dist/content-scripts/js'),
      },
}