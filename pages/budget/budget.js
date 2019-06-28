// pages/budget/budget.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expectedStores: '10000',
    budgetName: '测试预算',
    budgetModle: '测试预算模型',
    budgetTerm: '每 1 月',
    nextDate: '2019年6月28日',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var total = 1020;
    var used = 100;
    var store = 400;
    var canUse = total - store;
    var beyond = store - (total - used);
    this.setData({
      used: Math.round((used>canUse?canUse:used)/total*100) + '%',
      store: Math.round(store/total*100) + '%',
      beyond: Math.round((beyond > 0 ? (beyond > store? store:beyond):0)/store*100) + '%'
    });
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