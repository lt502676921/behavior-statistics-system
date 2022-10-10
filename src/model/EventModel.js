/**
 * @description event 数据 model
 * @author 李唐
 */

const mongoose = require('../db/mongoose')

const schema = mongoose.Schema(
  {
    eventKey: String,
    eventData: {
      pv: Number,
      // uv: Number,
      data: Object,
    },
    eventDate: Date,
  },
  { timestamps: true }
)

const EventModel = mongoose.model('event_analytics_data', schema)

module.exports = EventModel
