// pages/asset/asset_detail/asset_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit: function (evt) {
    for(var item in evt.detail.value){
      // eval("console.log(evt.detail.value."+item+")");
      console.log(item);
      if(!item){
        wx.showToast({
          title: '请将信息填写完整',
          icon: 'none',
          duration: 1000
        });
        return;
      }
    }
    console.log(evt.detail.value);
    // wx.navigateBack();
  },
  cancle: function (evt) {
    wx.navigateBack();
  },
  typeChange: function (evt) {
    console.log(evt.detail.value);
    this.setData({
      accountType: evt.detail.value
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