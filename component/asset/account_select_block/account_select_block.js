// component/asset/account_select_block/account_select_block.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    accountArray:{
      type:Array,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    accountName: '请选择账户'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function(e){
      const accountArrayElement = this.data.accountArray[e.detail.value];
      this.setData({
        accountId: accountArrayElement.accountId,
        accountName: accountArrayElement.accountName,
        accountType: accountArrayElement.accountType,
      });
      this.triggerEvent('accountchange',{
        accountId: accountArrayElement.accountId
      })
    }
  }
})
