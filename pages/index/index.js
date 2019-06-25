// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_book_name:'默认账本',
    budget_remain:10000,
    total_income:20000,
    total_spend:10000,
    monthData: {
        day:'10',
        statements:[
          {
            statementId: '1',
            leftText: '总收入  10000',
            rightText: '10000  总支出',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '2',
            leftText: '',
            rightText: '10000  测试',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '3',
            leftText: '',
            rightText: '10000  测试',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '4',
            leftText: '测试  10000',
            rightText: '',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '5',
            leftText: '总收入  10000',
            rightText: '10000  总支出',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '6',
            leftText: '',
            rightText: '10000  测试',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '7',
            leftText: '',
            rightText: '10000  测试',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '8',
            leftText: '测试  10000',
            rightText: '',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '9',
            leftText: '总收入  10000',
            rightText: '10000  总支出',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '10',
            leftText: '',
            rightText: '10000  测试',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '11',
            leftText: '',
            rightText: '10000  测试',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
          {
            statementId: '12',
            leftText: '测试  10000',
            rightText: '',
            imgSrc: '/image/tab-bar/icon_API.png',
          },
        ]
    },
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})