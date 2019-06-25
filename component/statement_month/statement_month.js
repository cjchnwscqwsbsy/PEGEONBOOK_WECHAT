// component/statement_month/statement_month.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    month:{
      type: String,
      value: 'default'
    },
    dayArray:{
      type: Array,
      value: [
        {
          day: '10',
          statements: [
            {
              statementId: '1',
              leftText: '总收入  10000',
              rightText: '10000  总支出',
              imgSrc: '/image/tab-bar/icon_API.png',
            },
            {
              statementId: '2',
              leftText: '',
              rightText: '10000  测试',
              imgSrc: '/image/tab-bar/icon_API.png',
            },
            {
              statementId: '3',
              leftText: '',
              rightText: '10000  测试',
              imgSrc: '/image/tab-bar/icon_API.png',
            }]
        },{
          day: '9',
          statements: [
            {
              statementId: '4',
              leftText: '总收入  10000',
              rightText: '10000  总支出',
              imgSrc: '/image/tab-bar/icon_API.png',
            },
            {
              statementId: '5',
              leftText: '',
              rightText: '10000  测试',
              imgSrc: '/image/tab-bar/icon_API.png',
            },
            {
              statementId: '6',
              leftText: '测试  10000',
              rightText: '',
              imgSrc: '/image/tab-bar/icon_API.png',
            }]
        }
      ]
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
