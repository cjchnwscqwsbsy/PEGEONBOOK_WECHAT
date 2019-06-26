// pages/asset/asset.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      total_assets:'100000.00',
      net_assets:'100000.00',
      accountArray:[
        {
          id:1,
          accountSum: '1000.00',
          accountComment: '其他详情',
          imgSrc: '/image/tab-bar/icon_API.png'
        },{
          id:2,
          accountSum: '4000000.00',
          accountComment: '其他详情',
          imgSrc: '/image/tab-bar/icon_API.png'
        },{
          id:3,
          accountSum: '4000000.00',
          accountComment: '其他详情',
          imgSrc: '/image/tab-bar/icon_API.png'
        },{
          id:4,
          accountSum: '4000000.00',
          accountComment: '其他详情',
          imgSrc: '/image/tab-bar/icon_API.png'
        },{
          id:5,
          accountSum: '4000000.00',
          accountComment: '其他详情',
          imgSrc: '/image/tab-bar/icon_API.png'
        },{
          id:6,
          accountSum: '4000000.00',
          accountComment: '其他详情',
          imgSrc: '/image/tab-bar/icon_API.png'
        },{
          id:7,
          accountSum: '4000000.00',
          accountComment: '其他详情',
          imgSrc: '/image/tab-bar/icon_API.png'
        },{
          id:8,
          accountSum: '4000000.00',
          accountComment: '其他详情',
          imgSrc: '/image/tab-bar/icon_API.png'
        },{
          id:9,
          accountSum: '4000000.00',
          accountComment: '其他详情',
          imgSrc: '/image/tab-bar/icon_API.png'
        }
      ]
    })
  },

  addAccount: function (evt) {
    console.log(evt)
  },
  viewAccount: function (evt) {
    console.log(evt)
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