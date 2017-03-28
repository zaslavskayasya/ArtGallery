
module.exports = {
    context: __dirname + "/app",
    entry: {
       main:  "./index.js" ,
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            'es2015'
                        ]
                    }
                }],
            },
        ],
    },

    watch: true,
    devtool: "source-map",

};

