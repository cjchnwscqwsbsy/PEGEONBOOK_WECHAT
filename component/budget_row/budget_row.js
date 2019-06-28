// component/budget_row/budget_row.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    budgetRowName:{
      type: String,
      value: '默认分类'
    },
    totalSum:{
      type: Number,
      value: 1000
    },
    remainSum:{
      type: Number,
      value: 900
    },
    budgetDetails:{
      type : Array,
      value : [
        {
          picSrc: '/image/tab-bar/icon_API.png',
          statementTypeName:'测试名称1',
          totalSum: 1000,
          remainSum: 800,
        },
        {
          picSrc: '/image/tab-bar/icon_API.png',
          statementTypeName:'测试名称2',
          totalSum: 900,
          remainSum: 800,
        },
      ]
    },
    showDetail:{
      type: Boolean,
      value: true
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
