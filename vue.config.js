module.exports = {
    // 入口变更为example
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 扩展webpack配置，使用packages加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
                .add('/packages')
                .end()
            .use('babel')
                .loader('babel-loader')
                .tap(options => {
                    return options
                })
    }
}