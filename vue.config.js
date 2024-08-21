'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const {defineConfig} = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack').default
const NutUIResolver = require('@nutui/auto-import-resolver')

const CompressionPlugin = require('compression-webpack-plugin')

const name = process.env.VUE_APP_TITLE || '2024年度內部最佳分析師評選投票' // 网页标题

const port = process.env.port || process.env.npm_config_port || 8070 // 端口


module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    transpileDependencies: true,
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = name;
            return args
        })
    },
    devServer: {
        host: '0.0.0.0',
        port: port,
        open: true,
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            [process.env.VUE_APP_BASE_API]: {
                target: `http://localhost:8080`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
        allowedHosts: 'all'
    },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: [
            // 开启 unplugin 插件，自动引入 NutUI 组件
            /*Components({
                resolvers: [NutUIResolver()],
            })*/
            new CompressionPlugin({
                test: /\.(js|css|html)?$/i,     // 压缩文件格式
                // filename: '[path].gz[query]',   // 压缩后的文件名
                threshold: 4096,
                algorithm: 'gzip',
                minRatio: 0.8                   // 压缩率小于1才会压缩
            })
        ],
    },
    /*css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@nutui/nutui/dist/styles/variables.scss";`,
            }
        }
    }*/
})
