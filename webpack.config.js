var webpack = require('webpack');//压缩
var ET = require('extract-text-webpack-plugin');
module.exports={
	entry:'./app.js',
	output:{
		path:'./prd',
		filename:'bundle.js'
	},
	devtool: 'source-map',
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style!css'
			},
			{
	        	test: /\.scss$/,
		        loader: ET.extract('style', 'css!sass')
		    },
		    {
			   test: /\.js?$/,
			   exclude: /node_modules/,
			   loader: 'babel',
			   query: {
			      presets: ['es2015', 'react']
			   }
			}
		]
	},
	devServer: {
	    contentBase: __dirname + '/prd',
	    port: 8080,
	    host: 'localhost',
	    proxy: {
	      '/api': {
	        target: 'http://localhost:9000',
	        pathRewrite: {
	          '^/api': ''
	        }
	      }
	    }
	},
	plugins: [
    //new webpack.optimize.UglifyJsPlugin(),//压缩
    new ET('bundle.css')
  ]

}