Component({
  data: {
    // selected: 2,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      name: "asset",
      pagePath: "/pages/asset/asset",
      iconPath: "/image/tab-bar/icon_API.png",
      selectedIconPath: "/image/tab-bar/icon_API_HL.png",
      text: "资产"
    }, {
      name: "report",
      pagePath: "/pages/report/report",
      iconPath: "/image/tab-bar/icon_API.png",
      selectedIconPath: "/image/tab-bar/icon_API_HL.png",
      text: "报表"
    }, {
      name: "statement",
      pagePath: "/pages/index/index",
      iconPath: "/image/tab-bar/icon_API.png",
      selectedIconPath: "/image/tab-bar/icon_API_HL.png",
      text: "流水"
    }, {
      name: "balance",
      pagePath: "/pages/balance/balance",
      iconPath: "/image/tab-bar/icon_API.png",
      selectedIconPath: "/image/tab-bar/icon_API_HL.png",
      text: "平账"
    }, {
      name: "config",
      pagePath: "/pages/config/config",
      iconPath: "/image/tab-bar/icon_API.png",
      selectedIconPath: "/image/tab-bar/icon_API_HL.png",
      text: "我"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.name
      })
    }
  }
})