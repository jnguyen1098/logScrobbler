const webpack = require('webpack');

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/logScrobbler/'
        : '/',
    runtimeCompiler: true,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        },
        plugins: [ 
            new NodePolyfillPlugin(),
            new webpack.ProvidePlugin({
                process: 'process/browser',
                _: 'lodash', // Lodash for general use
            }),
            new webpack.DefinePlugin({
                "global.GENTLY_HIJACK": false,
                "process.env": JSON.stringify(process.env)
            })
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm-bundler.js',
            },
            fallback: {
              http: require.resolve('stream-http'),
              querystring: require.resolve('querystring-es3'),
              crypto: require.resolve('crypto-browserify'),
              url: require.resolve('url'),
              buffer: require.resolve("buffer")
            }
        }
    },

}
