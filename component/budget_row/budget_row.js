// component/budget_row/budget_row.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    budgetRowName:{
      type: String,
      // value: '默认分类'
    },
    totalSum:{
      type: Number,
      // value: 1000
    },
    remainSum:{
      type: Number,
      // value: 900
    },
    budgetDetails:{
      type : Array,
    },
    showDetail:{
      type: Boolean,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    arrowPicSrc:"/image/common/arrow.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTitleTap:function () {
      this.setData({
        showDetail: !this.data.showDetail,
        arrowPicSrc: this.data.showDetail?"/image/common/arrow_reverse.png":"/image/common/arrow.png",
      })
    }
  }
})
