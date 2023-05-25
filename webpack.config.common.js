const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
const dotenv = require('dotenv')

dotenv.config();

/**
 * flag Used to check if the environment is production or not
 */
const isProduction = process.argv.indexOf('--mode=production') !== -1;

module.exports = {
	entry: './src/index.tsx',
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, 'build'),
		filename: `bundle-[contenthash:8].js`,
		assetModuleFilename: 'images/[name][ext]',
		clean: true,
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				},
			},
			{
				test: /\.(jpg|jpeg|gif|png|svg)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		]
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ 
					from: path.resolve(__dirname, 'public/images'), 
					to: path.resolve(__dirname, 'build/images'),
				}
			],
		}),
		new HtmlWebpackPlugin(
			Object.assign(
				{},
				{
					inject: true,
					template: 'public/index.html',
				},
				isProduction
					? {
						minify: {
							removeComments: true,
							collapseWhitespace: true,
							removeRedundantAttributes: true,
							useShortDoctype: true,
							removeEmptyAttributes: true,
							removeStyleLinkTypeAttributes: true,
							keepClosingSlash: true,
							minifyJS: true,
							minifyCSS: true,
							minifyURLs: true,
						},
					}
				: undefined
			)
		),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env)
		})
	]
};