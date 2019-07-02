// pages/config/config_budget_model/config_budget_model.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    termMonth: 1,
    startDay: 1,
    modelRows: [
      {
        rowId:'B1',
        rowName:'名称1',
        rowType:'支出',
        details:[
          {detailId:'C1',statementTypeName:'类型1'},{detailId:'C2',statementTypeName:'类型2'}
          ]
      },
      {
        rowId:'B2',
        rowName:'名称2',
        rowType:'虚拟',
        details:[
          {detailId:'C1',statementTypeName:'类型1'}
          ]
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  validateMonth: function (evt) {
    let value = evt.detail.value > 12?12:evt.detail.value;
    value = value < 0 ? 1 : value;
    this.setData({
      termMonth: value
    })
  },
  validateDay: function (evt) {
    let value = evt.detail.value > 30?30:evt.detail.value;
    value = value < 0 ? 1 : value;
    this.setData({
      startDay: value
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