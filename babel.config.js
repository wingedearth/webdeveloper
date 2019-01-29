const env = {
	test: {
		presets: [['@babel/env'], '@babel/preset-react']
	}
};

const plugins = [
	'@babel/transform-arrow-functions',
	'@babel/plugin-transform-runtime',
	'@babel/plugin-syntax-dynamic-import',
	'@babel/plugin-transform-modules-commonjs',
	'transform-class-properties'
];

const presets = [
	'@babel/preset-react',
	[
		'@babel/env',
		{
			targets: {
				edge: '17',
				chrome: '67',
				firefox: '60',
				ie: '10',
				iOS: '8',
				node: '8',
				safari: '11.1'
			},
			useBuiltIns: 'entry'
		}
	]
];

module.exports = function(api) {
	api.cache(false);

	return {
		env,
		plugins,
		presets
	};
};
