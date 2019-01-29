const path = require('path');
const rules = require('./rules');

/**
 * @func isProd
 * @param {string} nodeEnv - Node environment
 * @returns {bool} true if production environment is set
 */
const isProd = nodeEnv => nodeEnv === 'production';

const config = {
	mode: isProd(process.env.NODE_ENV) ? 'production' : 'development',
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	output: {
		publicPath: path.resolve(__dirname, '..', 'build'),
		filename: '[name].js',
		path: path.resolve(__dirname, '..', 'build')
	},
	resolve: {
		modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
		extensions: ['.js', '.es6', '.json', '.css', '.jsx']
	},
	devtool: 'inline-source-map',
	module: {
		rules: rules
	},
	stats: 'errors-only',
	watchOptions: {
		ignored: /node_modules/,
		poll: true
	}
};

module.exports = config;
