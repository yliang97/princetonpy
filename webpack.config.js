// dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
	context: '/Users/Yijia/Documents/princetonpy',
	entry: {
		index: './assets/js/index',
	},
	output: {
		path: path.resolve('./assets/bundles/'),
		filename: '[name].js',
	},

	plugins: [
		new BundleTracker({filename: './webpack-stats.json'}),

		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			}
		]
	},

	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx']
	}
}