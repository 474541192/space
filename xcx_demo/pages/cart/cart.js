// pages/cart/cart.js
const app = getApp()

export default class usual {
  static sum(shopData) {
    //计算总价
    new Promise((res, rej) => {
      var that = this
      let total = 0
      for (let i = 0; i < shopData.length; i++) {
        if (shopData[i].check) {
          total += shopData[i].price * 1000 * shopData[i].num / 1000
        }
      }
      console.log(total)
      wx.setStorageSync('total', total)
    })
  }
  static selectAll(shopData) {
    return new Promise((res, rej) => {
      //一进页面即全为选中状态
      var that = this
      for (let i = 0; i < shopData.length; i++) {
        let datashop = shopData[i].pro
        for (let i in datashop) {
          datashop[i].check = false
        }
      }
    })
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart_list: [{
        id: "01",
        title: "丽彩娜 滋养染发剂",
        img: "../../images/list_03.jpg",
        price: 79
      },
      {
        id: "02",
        title: "丽彩娜 发丝丰盈喷雾",
        img: "../../images/list_09.jpg",
        price: 138
      },
      {
        id: "03",
        title: "资生堂惠润柔净洗发露/护发素",
        img: "../../images/list_09.jpg",
        price: 96
      },
      {
        id: "04",
        title: "心心相印无醇百 买一送一 (两瓶装) 保质期20...",
        img: "../../images/list_03.jpg",
        price: 398
      }
    ],
    cart_con: [{
        id: 1,
        title: "阿根廷谷饲牛上脑 牛排",
        size: "800g",
        img: "/images/cart_img.jpg",
        //是否选中状态
        check: true,
        price: 198,
        num: 1
      },
      {
        id: 2,
        title: "新西兰牛上脑上脑 牛排",
        size: "100g",
        //是否选中状态
        check: true,
        img: "/images/cart_img.jpg",
        price: 1002,
        num: 1
      },
      {
        id: 3,
        title: "阿根廷谷饲牛上脑 牛排",
        size: "125g",
        //是否选中状态
        check: true,
        img: "/images/cart_img.jpg",
        price: 178,
        num: 1
      },
    ],
    //是否编辑状态
    edit: false,
    //是否全选
    allCheck: true,
    // 是否选择商品
    choose: true,
    //总价
    total: 0.00
  },
  // 购物车加
  add(e) {

    let index = e.currentTarget.dataset.index
    console.log(index)
    let cart_con = this.data.cart_con
    cart_con[index].num++
    usual.sum(cart_con)
    let total = wx.getStorageSync('total', total)
    this.setData({
      total: total,
      cart_con: cart_con
    })
  },
  // 购物车减
  subtraction(e) {

    let index = e.currentTarget.dataset.index
    let cart_con = this.data.cart_con
    console.log(index)
    if (cart_con[index].num > 1) {
      cart_con[index].num--
    } else {
      wx.showToast({
        title: "该商品一件起售哦",
        icon: "none"
      })
    }
    usual.sum(cart_con)
    let total = wx.getStorageSync('total', total)
    this.setData({
      total: total,
      cart_con: cart_con
    })
  },
  // 购物车单选
  //单选
  danxuan(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    let cart_con = this.data.cart_con
    cart_con[index].check = !cart_con[index].check
    usual.sum(cart_con)
    let total = wx.getStorageSync('total', total)
    this.setData({
      total: total,
      cart_con: cart_con
    })
  },


















  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车',
    })
    console.log(options)
    usual.sum(this.data.cart_con)
    let total = wx.getStorageSync('total', total)
    this.setData({
      total: total
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})