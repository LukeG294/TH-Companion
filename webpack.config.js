const path = require('path');
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    entry: [
      "/src/scripts/interfaces.tsx"
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
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/content-scripts/js'),
      },
}