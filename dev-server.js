const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
    contentBase: './dist',//配置根路径
    hot: true,//是否开启热更新
    host: 'localhost',
    historyApiFallback: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);
//启动端口
server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});
