// component/common/select_box/editable/select_box_editable.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentValue:{
      type: String,
    },
    optionList:{
      type: Array,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    arrowPicSrc:"/image/common/arrow.png",
    showOption:false,
    manageOption:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShow: function () {
      this.setData({
        showOption:!this.data.showOption,
        onManage:false,
        arrowPicSrc:this.data.showOption?"/image/common/arrow.png":"/image/common/arrow_reverse.png",
      })
    },
    onManage: function () {
      this.setData({
        manageOption:!this.data.manageOption,
      })
    },
    onDelete: function (e) {
      console.log('trigger delete')
      this.triggerEvent('delete',{
        id: e.currentTarget.dataset.id
      })
    } ,
    onEdit: function (e) {
      this.triggerEvent('edit',{
        id: e.currentTarget.dataset.id
      })
    } ,
    onAdd: function (e) {
      this.triggerEvent('add')
    } ,
    onSelect: function (e) {
      this.setData({
        showOption:!this.data.showOption,
        currentId : e.target.dataset.id,
        currentValue : e.target.dataset.name
      });
      this.triggerEvent('select',{
        currentId : e.target.dataset.id,
        currentValue : e.target.dataset.name
      })
    } ,
  }
})
