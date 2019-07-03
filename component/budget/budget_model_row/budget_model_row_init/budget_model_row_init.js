// component/budget_model_row/budget_model_row_init/budget_model_row_init.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rowName: {
      type: String,
      value: '默认分项'
    },
    rowType: {
      type: String,
      value: '默认类型'
    },
    details: {
      type: Array,
      value: [
        {
          id: 1,
          statementType: '默认类型1',
          isAuto: false,
          value: 0,
        },
        {
          id: 2,
          statementType: '默认类型2',
          isAuto: true,
          value: null,
          formula: '计算公式'
        },
      ]
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    arrowPicSrc:"/image/common/arrow.png",
    showDetail: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTitleTap:function () {
      this.setData({
        showDetail: !this.data.showDetail,
        arrowPicSrc: this.data.showDetail?"/image/common/arrow.png":"/image/common/arrow_reverse.png",
      })
    }
  }
})
