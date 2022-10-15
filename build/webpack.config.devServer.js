'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const webpack           = require('webpack');
const utils             = require('./utils');

const HOST = 'localhost';
const PORT = 9000;

module.exports = {
	entry: {
		'main':  utils.resolve('../src/index.ts'),
	},
	devtool:   'source-map',
	mode:      'development',
	devServer: {
		hot:                true,
		compress:           true,
		host:               HOST,
		port:               PORT,
		open:               true,
		historyApiFallback: true
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.tsx', '.vue', '.json'],
		alias:      {
			'@':  utils.resolve('../src'),
		},
	},
	module: {
		rules: [
			{
				test:   /\.(png|jpg|svg)$/,
				type: 'asset/inline',
			},
			{
				test: /\.(woff(2)?|eot|ttf)$/,
				type: 'asset/inline',
			},
			{
				test: /\.scss$/,
				use:  [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader:  'sass-loader',
					},
				],
			},
			{
				test:    /\.ts$/,
				loader:  'ts-loader',
				options: {
					configFile:           'tsconfig.json',
					appendTsSuffixTo:     [/\.vue$/],
					allowTsInNodeModules: true,
				},
			},
			{
				test:   /\.js?x$/,
				loader: 'babel-loader',
			},
			{
				test:   /\.vue$/,
				loader: 'vue-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject:   true,
		}),
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
};
