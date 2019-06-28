// pages/asset/asset.js
var event = require("../../utils/event");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentBody: 'asset'
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
        }
      ]
    })
  },
  refreshPage: function () {
    this.setData({
      total_assets:'100000.00',
      net_assets:'100000.00',
      accountArray:[
        {
          id:1,
          accountSum: '1000.00',
          accountComment: '刷新后其他详情',
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
        }
      ]
    })
  },
  showAssetAccount: function (evt) {
    if(this.data.currentBody === 'asset') return;
    var bodyData = [
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
      }
    ];

    this.setData({
      accountArray: bodyData,
      currentBody: 'asset'
    });
  },

  showLiabilityAccount: function (evt) {
    if(this.data.currentBody === 'liability') return;
    var bodyData = [
      {
        id:1,
        accountSum: '1000.00',
        accountComment: '负债详情',
        imgSrc: '/image/tab-bar/icon_API.png'
      },{
        id:2,
        accountSum: '4000000.00',
        accountComment: '负债详情',
        imgSrc: '/image/tab-bar/icon_API.png'
      },{
        id:3,
        accountSum: '4000000.00',
        accountComment: '负债详情',
        imgSrc: '/image/tab-bar/icon_API.png'
      },{
        id:4,
        accountSum: '4000000.00',
        accountComment: '负债详情',
        imgSrc: '/image/tab-bar/icon_API.png'
      }
    ];

    this.setData({
      accountArray: bodyData ,
      currentBody: 'liability'
    });
  },

  addAccount: function (evt) {
    wx.navigateTo({ url: '/pages/asset/asset_detail/asset_detail'})
  },
  viewAccount: function (evt) {
    wx.navigateTo({ url: '/pages/asset/asset_detail/asset_detail?account_id='+evt.currentTarget.dataset.accountId});
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
    event.on('refreshAssetPage',this, this.refreshPage.bind(this));
    console.log('hide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    event.remove('refreshAssetPage',this);
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