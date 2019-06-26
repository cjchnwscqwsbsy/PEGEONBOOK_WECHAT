// pages/main/main.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showBookList: false,
    manage_book: false,
    arrowPicSrc:"/image/common/arrow.png",
    current_book_name:'默认账本',
    budget_remain:10000,
    total_income:20000,
    total_spend:10000,
    bookList:[
        {id:1,name:"账本1"},
        {id:2,name:"账本2"},
        {id:3,name:"账本3"},
      ],
    statementData: [
      {
        month:'10',
        dayArray:[
          {
            day: '10',
            statements: [
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
              }]
          },{
            day: '9',
            statements: [
              {
                statementId: '4',
                leftText: '总收入  10000',
                rightText: '10000  总支出',
                imgSrc: '/image/tab-bar/icon_API.png',
              },
              {
                statementId: '5',
                leftText: '',
                rightText: '10000  测试',
                imgSrc: '/image/tab-bar/icon_API.png',
              },
              {
                statementId: '6',
                leftText: '测试  10000',
                rightText: '',
                imgSrc: '/image/tab-bar/icon_API.png',
              }]
          }
        ]
      },{
        month:'9',
        dayArray:[
          {
            day: '10',
            statements: [
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
              }]
          },{
            day: '9',
            statements: [
              {
                statementId: '4',
                leftText: '总收入  10000',
                rightText: '10000  总支出',
                imgSrc: '/image/tab-bar/icon_API.png',
              },
              {
                statementId: '5',
                leftText: '',
                rightText: '10000  测试',
                imgSrc: '/image/tab-bar/icon_API.png',
              },
              {
                statementId: '6',
                leftText: '测试  10000',
                rightText: '',
                imgSrc: '/image/tab-bar/icon_API.png',
              }]
          }
        ]
      },
    ]
  },

  showOrHideBookList: function (evt){
      this.setData({
        manage_book:false,
        showBookList:!this.data.showBookList,
        arrowPicSrc:this.data.showBookList?"/image/common/arrow.png":"/image/common/arrow_reverse.png",
      })
  },
  addStatement: function (evt){
    console.log("addStatement");
  },
  manageBook: function (evt){
    this.setData({
      manage_book:true
    });
  },
  completeBookManage: function (evt){
    this.setData({
      manage_book:false
    });
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