const merge = require('lodash/merge');
const nodeExternals = require('webpack-node-externals');
const colors = require('colors');
const webpackSharedConfig = require('./config');
const getPlugins = require('./plugins');
const isLocal = process.env.LOCAL === true || process.env.LOCAL === 'true';
const plugins = getPlugins();
const watchingMessage = watch => `Webpack is ${!watch ? 'not ' : ''}watching the server.`;

const backend = merge({}, webpackSharedConfig, {
	name: 'backend',
	entry: {
		server: './src/server/server.js'
	},
	target: 'node',
	output: {
		libraryTarget: 'commonjs2'
	},
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: true,
		__dirname: true
	},
	externals: [nodeExternals()],
	plugins: plugins,
	watch: isLocal
});

console.log(watchingMessage(backend.watch).blue);

module.exports = backend;
