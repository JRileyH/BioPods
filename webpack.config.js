module.exports = {
     entry: './src/app.js',
     output: {
         path: __dirname+'/dist',
         filename: 'app.bundle.js'
     },
     module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['es2015','babili']
                    }
                }
            }
        ]
    },
    devtool: "source-map"
 };