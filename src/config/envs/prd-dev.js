/**
 * @description prd-dev 配置
 * @author 李唐
 */

const devConf = require('./dev')

// 修改 mongodb 连接配置
Object.assign(devConf.mongodbConf, {
  port: '27017', // 依赖于 jpgs-cli-server 启动 docker-compose
  host: 'docker-host', // docker 内部访问宿主机的 hostName，配置在 Dockerfile
})

// 修改日志文件位置，见 docker-compose.yml 的配置
devConf.accessLogPath = '/app/nginx_logs/event_analytics'

module.exports = devConf
