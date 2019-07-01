// pages/budget/budget_init/budget_init.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    budgetRows : [
      {
        id: 1,
        rowName: '预算分项1',
        rowType: '资产',
        details: [
          {
            id: 1,
            statementType: '流水类型1',
            isAuto: false,
            value: 0,
          },
          {
            id: 2,
            statementType: '流水类型2',
            isAuto: true,
            value: null,
            formula: '计算公式'
          },
        ]
      },
      {
        id: 2,
        rowName: '预算分项2',
        rowType: '虚拟预算',
        details: [
          {
            id: 1,
            statementType: '流水类型1',
            isAuto: false,
            value: 0,
          },
          {
            id: 2,
            statementType: '流水类型2',
            isAuto: true,
            value: null,
            formula: '计算公式'
          },
        ]
      },
      {
        id: 3,
        rowName: '预算分项3',
        rowType: '虚拟预算',
        details: [
          {
            id: 1,
            statementType: '流水类型1',
            isAuto: false,
            value: 0,
          },
          {
            id: 2,
            statementType: '流水类型2',
            isAuto: true,
            value: null,
            formula: '计算公式'
          },
          {
            id: 3,
            statementType: '流水类型3',
            isAuto: true,
            value: null,
            formula: '计算公式'
          },
        ]
      },
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})