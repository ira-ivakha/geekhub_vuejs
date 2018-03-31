module.exports = {
    entry: './index.js',
    output: {
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
};