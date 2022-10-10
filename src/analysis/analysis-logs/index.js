/**
 * @description 分析日志
 * @author 李唐
 */

const analysisLogs = require('./analysis')
const getSearchResultByAnalysisLog = require('./analysisSearch')
const writeDB = require('./writeDB')

/**
 * 分析日志文件，结果入库
 * @param {string} accessLogPath access log 目录
 */
async function analysisLogsAndWriteDB(accessLogPath) {
  const result = await analysisLogs(accessLogPath)
  await writeDB(result)
  const searchResult = await getSearchResultByAnalysisLog(accessLogPath)
  await writeDB(searchResult)
  console.log('----------- 日志结果入库 完成 -----------')
}

// analysisLogsAndWriteDB('/Users/oreo/Desktop/Downloads/2022-08-30.log')

module.exports = analysisLogsAndWriteDB
