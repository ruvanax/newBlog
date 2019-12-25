const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode: 'development',
	entry:{
		app: "./client/src/main.js"
	},
	output:{
		filename: "[name].js",
		path: path.resolve(__dirname, './dist'),
		publicPath: "/dist"
	},
	devtool: 'inline-source-map',
	module:{
		rules:[
		{
	        test: /\.vue$/,
	        loader: 'vue-loader'
	    },
		{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: "/node_modules/"
		},
		{
			test: /\.css$/,
			use: [
	          'vue-style-loader',
	          'css-loader'
	        ]
		}
		]
	},
	plugins: [
    	new VueLoaderPlugin()
  	],
	devServer:{
		contentBase: "./client",
		overlay: true,
		historyApiFallback: true,
		hot: true,
		proxy:{
			'/rest':{
				target: "http://localhost:5000"
			}
		}
	}
};