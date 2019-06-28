// component/budget_row/budget_row_detail/budget_row_detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    picSrc: {
      type: String,
      value: '/image/tab-bar/icon_API.png',
    },
    statementTypeName: {
      type: String,
      value: '测试名称',
    },
    totalSum: {
      type: Number,
      value: 1023
    },
    remainSum: {
      type: Number,
      value: 900
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
