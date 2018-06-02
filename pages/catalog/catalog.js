Page({
  data: {
    currentCategory: {
    },
    currentCategory1: {
      id: '1',
      name: '书',
      bannerId:'1',
      bannerUrl: 'https://img30.360buyimg.com/babel/s350x226_jfs/t18856/152/2186227109/176098/9009d34a/5aeaa827N94baf6e4.jpg!q90!cr_558x360_385_0',
      subCategoryList: [
        {
          id: '11',
          bannerUrl: 'http://img3m7.ddimg.cn/87/13/25274787-1_l_5.jpg',
          name: '论语别裁论语别裁'
        },
        {
          id: '12',
          bannerUrl: 'http://img3m1.ddimg.cn/9/2/25261641-1_l_3.jpg',
          name: '如何获得...'
        },
        {
          id: '13',
          bannerUrl: 'http://img3m6.ddimg.cn/15/11/25247886-1_l_9.jpg',
          name: '学会爱自己'
        },
        {
          id: '14',
          bannerUrl: 'http://img3m9.ddimg.cn/92/8/25268159-1_l_6.jpg',
          name: '那不勒斯的...'
        },
        {
          id: '15',
          bannerUrl: 'http://img3m7.ddimg.cn/32/15/1900974767-1_l_2.jpg',
          name: '西藏生死恋'
        },
        {
          id: '16',
          bannerUrl: 'http://img3m7.ddimg.cn/87/13/25274787-1_l_5.jpg',
          name: '论语别裁'
        },
        {
          id: '17',
          bannerUrl: 'http://img3m1.ddimg.cn/9/2/25261641-1_l_3.jpg',
          name: '如何获得...'
        },
        {
          id: '18',
          bannerUrl: 'http://img3m6.ddimg.cn/15/11/25247886-1_l_9.jpg',
          name: '学会爱自己'
        },
        {
          id: '19',
          bannerUrl: 'http://img3m9.ddimg.cn/92/8/25268159-1_l_6.jpg',
          name: '那不勒斯的...'
        },
        {
          id: '20',
          bannerUrl: 'http://img3m7.ddimg.cn/32/15/1900974767-1_l_2.jpg',
          name: '西藏生死恋'
        }
      ]
    },
    currentCategory2: {
      id: '2',
      name: '代步工具',
      bannerId: '2',
      bannerUrl: 'https://img14.360buyimg.com/babel/s350x180_jfs/t19417/208/2715327256/97131/bc34c0fa/5b07bd79N2a61e8fc.jpg!q90!cc_350x180',
      subCategoryList: [
        {
          id: '21',
          bannerUrl: 'http://img1.360buyimg.com/n6/jfs/t13504/203/1493072361/149194/26c951e8/5a211f37N74a81ee2.jpg',
          name: '山地车'
        },
        {
          id: '22',
          bannerUrl: 'http://img1.360buyimg.com/n6/jfs/t19279/102/1834286053/250135/9fab058e/5ada7f5bNcc8d7e46.jpg',
          name: '自行车'
        }
      ]
    },
    navList: [
      {
        id: '1',
        name: '书'
      },
      {
        id: '2',
        name: '代步工具'
      }
    ]
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '分类'
    })
    this.setData({
      currentCategory: this.data.currentCategory1
    });
  },

  onReady: function () {
  },

  onShow: function () {
  },

  onHide: function () {
  },

  onUnload: function () {
  },

  onPullDownRefresh: function () {
  },

  onReachBottom: function () {
  },

  onShareAppMessage: function () {
  },

  switchCate: function (event) {
    var that = this;
    var currentTarget = event.currentTarget;
    console.log(currentTarget);
    if (this.data.currentCategory.id == event.currentTarget.dataset.id) {
      return false;
    }
    if (currentTarget.dataset.id == "1") {
      that.setData({
        currentCategory: this.data.currentCategory1
      });
    } else {
      that.setData({
        currentCategory: this.data.currentCategory2
      });
    }
  },

  toPromotion:function(){
    wx.navigateTo({
      url: '/pages/goods/goods?id=' + this.data.currentCategory.bannerId,
    })
  }
})