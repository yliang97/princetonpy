// dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
	context: '/Users/Yijia/Dropbox/Princeton/IW_fall_17/princetonpy',
	entry: './assets/js/index',
	output: {
		path: path.resolve('./assets/bundles/'),
		filename: 'bundle.js',
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