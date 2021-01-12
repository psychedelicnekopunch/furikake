
const webpack = require('webpack');
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'demo'),
		filename: 'script.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { url: false },
					},
					'sass-loader',
				],
			},
			// {
			// 	test: /\.(png|svg|jpg|jpeg|gif)$/i,
			// 	type: 'assets/images',
			// },
		],
	},
	plugins: [
		new webpack.IgnorePlugin({
			resourceRegExp: /^\.\/locale$/,
			contextRegExp: /moment$/,
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],
}
