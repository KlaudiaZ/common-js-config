const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, APP_DIR, aliases = {}) => {
	const { PLATFORM, VERSION } = env;
	return merge([
		{
			entry: APP_DIR,
			devtool: "inline-source-map",
			module: {
				rules: [
					{
						test: /\.js$|\.jsx$/,
						exclude: /node_modules/,
						use: {
							loader: "babel-loader"
						}
					},
					{
						test: /\.css$/,
						exclude: /node_modules/,
						use: {
							loader: "css-loader"
						}
					},
					{
						test: /\.scss$/,
						exclude: /node_modules/,
						use: [
							PLATFORM === "production"
								? MiniCssExtractPlugin.loader
								: "style-loader",
							"css-loader",
							"sass-loader"
						]
					}
				]
			},
			resolve: {
				extensions: [".js", ".jsx"],
				alias: {
					...aliases
				}
			},
			plugins: [
				new CopyWebpackPlugin([{ from: "src/static" }]),
				new HtmlWebpackPlugin({
					template: "./src/index.html",
					filename: "./index.html"
				}),
				new webpack.DefinePlugin({
					"process.env.VERSION": JSON.stringify(env.VERSION),
					"process.env.PLATFORM": JSON.stringify(env.PLATFORM)
				})
			]
		}
	]);
};
