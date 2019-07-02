// component/budget_model_row/budget_model_row_manage/budget_model_row_manage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rowId: {type:String ,value: 'BX'},
    rowName: {type:String ,value: '默认名称'},
    rowType: {type:String ,value: '默认类型'},
    details: {type:Array ,value: [{detailId:'C1',statementTypeName:'类型1'},{detailId:'C2',statementTypeName:'类型2'}]}
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
    },
  }
})
