var config = {
   entry: './main.jsx',
	
   output: {
      path:__dirname + "/public",
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 3000,
      historyApiFallback : true
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },   
   resolve: {
      extensions: ['.js', '.jsx'],
   }
}

module.exports = config;