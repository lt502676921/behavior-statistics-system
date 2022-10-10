/**
 * @description event route
 * @author 李唐
 */

const router = require('koa-router')()
const { getEventData, getSearchData } = require('../controller/event-data')

// 路由前缀
router.prefix('/api/event')

// 获取 event 统计数据
router.get('/', async ctx => {
  const { category, action, label, value, startDate, endDate } = ctx.query

  const res = await getEventData({ category, action, label, value }, startDate, endDate)
  ctx.body = res
})

router.get('/searchResultBySearchMethods', async ctx => {
  const { startDate, endDate } = ctx.query

  const res = await getSearchData('searchResultBySearchMethods', startDate, endDate)
  ctx.body = res
})

router.get('/searchResultByPerson', async ctx => {
  const { startDate, endDate } = ctx.query

  const res = await getSearchData('searchResultByPerson', startDate, endDate)
  ctx.body = res
})

module.exports = router
