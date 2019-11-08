//logs.js
const app = getApp()
Page({
  data: {
    nav:{flag:0},
    list: [{  "end_time": 1571383650, "amount": "0.10", "points": "1", "points_ye": 149670, "phone": "13110121234" }, { "create_time": 1571974291, "coins": 20, "amount": 2, "phone": "15986289895", "points": 149348, "title": "发个共和国" }, {"use_point": 1, "state": 1, "merchant_level": "2", "merchant_profit": 0.6, "merchant_next_level_profit": "1.00", "is_distribute": 0, "distribute_time": 0, "goods_type": 2, "point_type": 2, "create_time": 1572513488, "phone": "13710245752" }, {"use_point": 8, "state": 0, "merchant_level": "2", "merchant_profit": "4.80", "merchant_next_level_profit": "8.00", "is_distribute": 0, "distribute_time": 0, "goods_type": 2, "point_type": 1, "create_time": 1572513410, "phone": "13710245752" }]
  },
  nav(e){
    this.setData({
      'nav.flag': Number(e.currentTarget.dataset.nav)
    })
  }
})
