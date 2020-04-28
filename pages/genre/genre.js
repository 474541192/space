// pages/genre/genre.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    list:[
    {'id':1,'title':'全部商品','con':1},
    {'id':2,'title':'防疫专区','con':2},
    {'id':3,'title':'美妆护肤','con':3},
    {'id':4,'title':'个护健康','con':4},
    {'id':5,'title':'家居用品','con':5},
    {'id':6,'title':'母婴用品','con':6},
    {'id':7,'title':'生鲜美食','con':7},
    {'id':8,'title':'酒水咖啡','con':8},
    {'id':9,'title':'企业采购','con':9},
    {'id':10,'title':'超值套餐','con':10},
    {'id':11,'title':'品牌专区','con':11},
    {'id':12,'title':'尾货清仓','con':12}
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
<<<<<<< HEAD

=======
>>>>>>> origin/djy-dome
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
<<<<<<< HEAD

  }
=======
  },
  change(e){
    let {index}=e.currentTarget.dataset
    console.log(index)
    this.setData({
      currentIndex:index
    })
      }
>>>>>>> origin/djy-dome
})