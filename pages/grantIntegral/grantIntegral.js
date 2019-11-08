//logs.js
const app = getApp()
Page({
  data: {
    form: {
      phone:'',
      coins:'',
      remark:''
    }
  },
  // 数据绑定
  model(e){
    let str = `form.${e.target.dataset.name}`;
    if (e.target.dataset.name === 'phone') {
      app.wx_model(e.detail.value, this, str, 11)
      return
    }
    app.wx_model(e.detail.value, this, str)
  },
  grant() {
    if (this.data.form.phone.length != 11) {
      app.errTip('请输入有效的手机号码')
      return false
    } else if (!this.data.form.coins) {
      app.errTip('请输入积分')
      return false
    } else if (
      this.data.form.remark.replace(/(^\s*)/g, '').length === 0 ||
      this.data.form.remark.replace(/(^\s*)/g, '').length > 32
    ) {
      app.errTip('请填写1~32字内的备注')
      return false
    } else {
      app.successTip('发放成功')
    }
  }
})
