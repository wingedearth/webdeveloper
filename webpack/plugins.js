const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OmitJSforCSSPlugin = require('webpack-omit-js-for-css-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => [
	new MiniCssExtractPlugin({ filename: '[name].css' }),
	new OmitJSforCSSPlugin({ verbose: true }),
	new OptimizeCSSAssetsPlugin({})
];
