// component/budget_model_row/budget_model_row_manage/budget_model_row_detail/budget_model_row_detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailId: {type: String, value: 'CX'},
    statementTypeName: {type: String, value: '默认类型'},
  },

  /**
   * 组件的初始数据
   */
  data: {
    valueTypes : [
        {
          name: '手动输入',
          value: 'input'
        },
        {
          name: '自动计算',
          value: 'formula'
        }
      ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    radioChange : function (e) {
      console.log(e.detail.value);
      this.setData({
        valueType: e.detail.value
      })
    },
    onDelete : function (e) {
      console.log(e.currentTarget.dataset.detailId)
    }
  }
})
