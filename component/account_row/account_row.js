// component/accont_row/account_row.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc:{
      type: String
    },
    accountSum: {
      type: String ,
      value: 'default'
    },
    accountComment: {
      type: String ,
      value: 'default'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    arrowPicSrc: "/image/common/arrow.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
