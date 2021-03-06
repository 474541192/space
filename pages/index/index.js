//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    searchPlaceholder:"面膜",
    tabBarList:[
      {name:"防疫专区"},
      {name:"美妆护肤"},
      {name:"个护健康"},
      {name:"家具用品"},
      {name:"生鲜美食"},
      {name:"酒水咖啡"},
      {name:"母婴用品"}
    ],
    swiperList:[
      {index:0,image:"../../homeSources/swiper_images/1.jpg"},
      {index:1,image:"../../homeSources/swiper_images/2.jpg"},
      {index:2,image:"../../homeSources/swiper_images/3.jpg"},
      {index:3,image:"../../homeSources/swiper_images/4.jpg"},
      {index:4,image:"../../homeSources/swiper_images/5.jpg"},
      {index:5,image:"../../homeSources/swiper_images/6.jpg"},
      {index:6,image:"../../homeSources/swiper_images/7.jpg"},
    ],
    menu:[
      {name:"全部商品",image:"../../homeSources/menu_images/1.jpg"},
      {name:"美妆护肤",image:"../../homeSources/menu_images/2.jpg"},
      {name:"个护健康",image:"../../homeSources/menu_images/3.jpg"},
      {name:"生鲜美食",image:"../../homeSources/menu_images/4.jpg"},
      {name:"超值套餐",image:"../../homeSources/menu_images/5.jpg"},
      {name:"绿道国际",image:"../../homeSources/menu_images/6.jpg"},
      {name:"品牌专区",image:"../../homeSources/menu_images/7.jpg"},
      {name:"领取绿卡",image:"../../homeSources/menu_images/8.jpg"}
    ],
    advertising:{
      image:"../../homeSources/advertising_images/1.jpg"
    },
    newGoods:[
      {intro:"【预售7天内发货】英国...",price:990,image:"../../homeSources/newGoods_images/1.jpg"},
      {intro:"诗梅迪多效奢养全脸眼...",price:990,image:"../../homeSources/newGoods_images/2.jpg"},
      {intro:"阿根廷谷饲养牛肉排",price:990,image:"../../homeSources/newGoods_images/3.jpg"},
      {intro:"阿根廷古饲养西牛排",price:990,image:"../../homeSources/newGoods_images/4.jpg"},
      {intro:"珍妮每日保护防晒霜...",price:990,image:"../../homeSources/newGoods_images/5.jpg"},
      {intro:"良品铺子|活力白领/全...",price:990,image:"../../homeSources/newGoods_images/6.jpg"},
      {intro:"日本HARIO手冲咖啡套...",price:990,image:"../../homeSources/newGoods_images/7.jpg"},
      {intro:"【健康之路】德国原...",price:990,image:"../../homeSources/newGoods_images/8.jpg"},
    ],
    hotGoods:[
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"},
      {intro:"李彩娜，滋养染发剂",price:79,image:"../../homeSources/hotGoods_images/1.jpg"}
    ],
    isFooterShow:true
  },

  //事件处理函数
  onLoad: function () {
    wx.setNavigationBarTitle({
      title:"绿道优品"
    })

    this.getData()
  },

  onReachBottom(){
    if(this.data.isFooterShow){
      setTimeout(()=>{
        this.setData({
          isFooterShow:false
        })
      },1000)
    }
  },
  getData(){
    wx.request({
      url:"../../api/list.json",
      method:"GET",
      header:{
        "content-type":"application/text"
      },
      success:(res)=>{
        console.log(res)
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  },
  toSearch(){
    
  },

  gotoDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})
