Page({
  data: {
    hotKeyword: [
      {
        keyword: 'keyword1',
        isHot: true
      },
      {
        keyword: 'keyword2',
        isHot: false
      }
    ],
    historyKeyword: [
    ],
    keyword: '',
    searchStatus: false,
    currentSortType: 'default',
    currentSortOrder: '',
    helpKeyword: [
      "search1",
      "search2",
      "search3"
    ],
    goodsList: [
      {
        picUrl: '../../images/wudong.jpg',
        name: '乌冬',
        price: '1.00'
      },
    ]
  },

  onLoad: function (options) {
    this.getHistoryKeyword()
  },
  getHistoryKeyword: function () {
    let history = wx.getStorageSync('historyKeyword')
    console.log(history);
    this.setData({
      historyKeyword: history || [],
    })
  },
  onKeywordConfirm: function (e) {
    // save to storage
    let value = e.detail.value
    if (value == "") {
      return
    }
    let array = new Array(value)
    let history = wx.getStorageSync('historyKeyword')
    if (history != "") {
      history.push(value)
      wx.setStorageSync('historyKeyword', history)
    } else {
      wx.setStorageSync('historyKeyword', array)
    }
    //开始搜索
    this.setData({
      searchStatus: true
    })
  },
  inputChange: function (e) {
    let value = e.detail.value
    this.setData({
      keyword: value
    })
  },
  inputFocus: function () {
    this.setData({
      searchStatus: false,
    });
    if (this.data.keyword) {
      this.getHelpKeyword();
    }
  },
  clearKeyword: function () {
    this.setData({
      keyword: '',
      searchStatus: false
    })
  },
  closeSearch: function () {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },
  onKeywordTap: function (e) {
    let value = e.target.dataset.keyword
    this.setData({
      keyword: value,
      searchStatus: true
    })
  },
  clearHistory: function () {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确认要删除搜索历史记录？',
      confirmColor: '#fab614',
      success: function (res) {
        if (res.confirm) {
          that.setData({
            historyKeyword: []
          })
          wx.removeStorageSync('historyKeyword')
        } else if (res.cancel) {
        }
      }
    })
  },
  getHelpKeyword: function () {
  },
  openSortFilter: function (e) {
    let id = e.currentTarget.id
    this.setData({
      currentSortType: id
    })
    let sort = this.data.currentSortOrder
    if (id === 'price') {
      if (sort === 'asc') {
        sort = 'desc'
      } else {
        sort = 'asc'
      }
    }
    this.setData({
      currentSortOrder: sort
    })
  }
})