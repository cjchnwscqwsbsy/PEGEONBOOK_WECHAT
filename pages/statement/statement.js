// pages/statement/statement.js
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statementDirection : 'TRANSFER'
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
    const date = new Date();
    const today = util.formatDate(date);
    date.setFullYear(date.getFullYear() - 1);
    const pickerStartDate = util.formatDate(date);
    date.setFullYear(date.getFullYear() + 2);
    const pickerEndDate = util.formatDate(date);
    this.setData({
      date: today,
      pickerStartDate: pickerStartDate,
      pickerEndDate: pickerEndDate,
      accountArray:[
        {
          accountId:1,
          accountName:'账户名1',
          accountType:'资产'
        },
        {
          accountId:2,
          accountName:'账户名2',
          accountType:'负债'
        },
      ],
      statementTypes: [
        {id:1,name:'支出顶层1',children:[
            {id:1,name:"1 支出子类1",imgSrc:'/image/tab-bar/icon_API.png'},
            {id:2,name:"1 支出子类2",imgSrc:'/image/tab-bar/icon_API.png'},
          ]},
        {id:2,name:'支出顶层2',children:[
            {id:1,name:"2 支出子类1",imgSrc:'/image/tab-bar/icon_API.png'},
            {id:2,name:"2 支出子类2",imgSrc:'/image/tab-bar/icon_API.png'},
          ]},
        {id:3,name:'支出顶层3',children:[
            {id:1,name:"3 支出子类1",imgSrc:'/image/tab-bar/icon_API.png'},
            {id:2,name:"3 支出子类2",imgSrc:'/image/tab-bar/icon_API.png'},
          ]},
      ]
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
    });
  },
  changeToSpend: function (e) {
    if(this.data.statementDirection === 'SPEND') return;
    this.initStatementData('SPEND')
  },
  changeToIncome: function (e) {
    if(this.data.statementDirection === 'INCOME') return;
    this.initStatementData('INCOME')
  },
  changeToTransfer: function (e) {
    if(this.data.statementDirection === 'TRANSFER') return;
    // this.initStatementData('TRANSFER')
    this.setData({
      statementDirection:'TRANSFER'
    });
  },
  initStatementData: function (direction) {
    let statementTypes;
    switch (direction){
      case 'SPEND': {
        statementTypes =  [
          {id:1,name:'支出顶层1',children:[
              {id:1,name:"1 支出子类1",imgSrc:'/image/tab-bar/icon_API.png'},
              {id:2,name:"1 支出子类2",imgSrc:'/image/tab-bar/icon_API.png'},
            ]},
          {id:2,name:'支出顶层2',children:[
              {id:1,name:"2 支出子类1",imgSrc:'/image/tab-bar/icon_API.png'},
              {id:2,name:"2 支出子类2",imgSrc:'/image/tab-bar/icon_API.png'},
            ]},
          {id:3,name:'支出顶层3',children:[
              {id:1,name:"3 支出子类1",imgSrc:'/image/tab-bar/icon_API.png'},
              {id:2,name:"3 支出子类2",imgSrc:'/image/tab-bar/icon_API.png'},
            ]},
        ];
        break;
      }
      case 'INCOME': {
        statementTypes =  [
          {id:1,name:'收入顶层1',children:[
              {id:1,name:"1 收入子类1",imgSrc:'/image/tab-bar/icon_API.png'},
              {id:2,name:"1 收入子类2",imgSrc:'/image/tab-bar/icon_API.png'},
            ]},
          {id:2,name:'收入顶层2',children:[
              {id:1,name:"2 收入子类1",imgSrc:'/image/tab-bar/icon_API.png'},
              {id:2,name:"2 收入子类2",imgSrc:'/image/tab-bar/icon_API.png'},
            ]},
          {id:3,name:'收入顶层3',children:[
              {id:1,name:"3 收入子类1",imgSrc:'/image/tab-bar/icon_API.png'},
              {id:2,name:"3 收入子类2",imgSrc:'/image/tab-bar/icon_API.png'},
            ]},
        ];
        break;
      }
    }

    this.setData({
      statementTypes: statementTypes,
      statementDirection: direction
    })
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