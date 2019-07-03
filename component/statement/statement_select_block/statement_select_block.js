// component/statement/statement_select_block/statement_select_block.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    statementTypes: {
      type: Array,
      value: [
        {id:1,name:'默认顶层1',children:[
            {id:1,name:"1 默认子类1",imgSrc:'/image/tab-bar/icon_API.png'},
            {id:2,name:"1 默认子类2",imgSrc:'/image/tab-bar/icon_API.png'},
          ]},
        {id:2,name:'默认顶层2',children:[
            {id:1,name:"2 默认子类1",imgSrc:'/image/tab-bar/icon_API.png'},
            {id:2,name:"2 默认子类2",imgSrc:'/image/tab-bar/icon_API.png'},
          ]},
        {id:3,name:'默认顶层3',children:[
            {id:1,name:"3 默认子类1",imgSrc:'/image/tab-bar/icon_API.png'},
            {id:2,name:"3 默认子类2",imgSrc:'/image/tab-bar/icon_API.png'},
          ]},
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statementTypeName: '等待选择流水类型',
    secondTypes: [{id:0,name:'等待选择大类'}],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindChange: function (e) {
      const values = e.detail.value;
      const secondTypes = this.data.statementTypes[e.detail.value[0]].children;
      this.setData({
        secondTypes: secondTypes,
        statementTypeName: secondTypes[values[1]].name,
        statementTypeId: secondTypes[values[1]].id,
        imgSrc: secondTypes[values[1]].imgSrc,
      });
    }
  },
})
