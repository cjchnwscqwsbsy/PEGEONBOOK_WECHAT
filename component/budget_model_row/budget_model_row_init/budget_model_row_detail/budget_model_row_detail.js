// component/budget_model_row/budget_model_row_init/budget_model_row_detail/budget_model_row_detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    statementType:{
      type: String ,
      value: '默认名称'
    },
    disabled:{
      type: Boolean,
    },
    value:{
      type: Number,
      value: null
    },
    placeholder:{
      type: String,
      value: '默认占位'
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
