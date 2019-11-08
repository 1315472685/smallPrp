//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    price:5,
    itemPrice:[5,10,20],
    num:10,
  },
  //选择价钱  
  choicePrice: function(e) {
    this.setData({
      price: e.currentTarget.dataset.price
    })
  },
  // 数量加减
  changeNum(e){
    let flag = e.currentTarget.dataset.flag;
    if(Number(flag)===0){
      if(this.data.num<2){
        this.setData({
          num: 1
        })
      }else{
        this.setData({
          num: --this.data.num
        })
      }
    }else{
      this.setData({
        num: ++this.data.num
      })
    }
    
  },
  // input数据绑定
  model(e){
    app.wx_model(Number(e.detail.value), this, e.target.dataset.name)
  },
  // 确认购买
  sureFn(){
    if (this.data.price > 25 || this.data.price<1){
      app.errTip('单券金额最为1~25元')
      return;
    }else if(this.data.num<1){
      app.errTip('请输入购买的数量')
      return;
    }else{
      app.successTip('购买成功！')
    }
  }
  
})
