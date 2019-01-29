const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsRule = {
	use: [
		{
			loader: 'source-map-loader'
		},
		{
			loader: 'babel-loader'
		}
	],
	test: /\.(js|jsx)$/,
	exclude: [/node_modules/],
	sideEffects: false
};

const CSSModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		sourceMap: true,
		localIdentName: '[local]__[hash:base64:5]',
		minimize: true
	}
};

const scssRule = {
	test: /\.scss$/,
	exclude: /\.module\.scss$/,
	use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
};

const scssModuleRule = {
	test: /\.module\.scss$/,
	use: [MiniCssExtractPlugin.loader, CSSModuleLoader, 'sass-loader']
};

const imageRule = {
	test: /\.(png|jp(e*)g)$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				name: '/images/[name].[ext]',
				limit: 8000
			}
		}
	]
};

module.exports = [jsRule, scssRule, scssModuleRule, imageRule];
