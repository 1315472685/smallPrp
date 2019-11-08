const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// input数据绑定
const wx_model = (val, self,flag)=>{
  self.setData({
    [flag]: val
  })
}
module.exports = {
  wx_model: wx_model,
  formatTime: formatTime
}
