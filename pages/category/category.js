const { Tab, extend } = require('../../zanui/dist/index');

Page(extend({}, Tab,
  {
    data: {
      currentCategory: {
        id: 1,
        name: '测试数据',
      },
      tab: {
        list: [],
        selectedId: undefined,
        scroll: true,
        height: 45,
      },
      allData: {},
      currentGoods: [],
      displayType: 'block',
    },
    onLoad: function (options) {
      const tabs = [
        {
          id: 1,
          title: '测试',
        },
        {
          id: 2,
          title: '数据',
        },
        {
          id: 3,
          title: '测试',
        },
        {
          id: 4,
          title: '数据',
        },
        {
          id: 5,
          title: '测试',
        },
        {
          id: 6,
          title: '数据',
        },
        {
          id: 7,
          title: '测试',
        },
        {
          id: 8,
          title: '数据',
        }
      ];
      const allData = {
        1: [
          {
            list_pic_url: '/images/wudong.jpg',
            name: '污妖王污妖王污妖王污妖王污妖王污妖王污妖王污妖王',
            description: '超级污超级污超级污超级污超级污超级污超级污超级污超级污超级污',
            price: '6666666666666666666666666666666666666666666666'
          },
          {
            list_pic_url: '/images/wudong.jpg',
            name: '污妖王',
            description: '超级污',
            price: '6'
          },
          {
            list_pic_url: '/images/wudong.jpg',
            name: '污妖王',
            description: '超级污',
            price: '66'
          },
          {
            list_pic_url: '/images/wudong.jpg',
            name: '污妖王',
            description: '超级污',
            price: '666'
          },
          {
            list_pic_url: '/images/wudong.jpg',
            name: '污妖王污妖王污妖王污妖王污妖王污妖王污妖王污妖王',
            description: '超级污超级污超级污超级污超级污超级污超级污超级污超级污超级污',
            price: '6666666666666666666666666666666666666666666666'
          },
          {
            list_pic_url: '/images/wudong.jpg',
            name: '污妖王',
            description: '超级污',
            price: '6'
          },
          {
            list_pic_url: '/images/wudong.jpg',
            name: '污妖王',
            description: '超级污',
            price: '66'
          },
          {
            list_pic_url: '/images/wudong.jpg',
            name: '污妖王',
            description: '超级污',
            price: '666'
          }
        ],
        2: [
          {
            list_pic_url: '/images/wudong3.jpg',
            name: '2污妖王污妖王污妖王污妖王污妖王污妖王污妖王污妖王',
            description: '超级污超级污超级污超级污超级污超级污超级污超级污超级污超级污',
            price: '6666666666666666666666666666666666666666666666'
          },
          {
            list_pic_url: '/images/wudong3.jpg',
            name: '2污妖王',
            description: '超级污',
            price: '6'
          },
          {
            list_pic_url: '/images/wudong3.jpg',
            name: '2污妖王',
            description: '超级污',
            price: '66'
          },
          {
            list_pic_url: '/images/wudong3.jpg',
            name: '2污妖王',
            description: '超级污',
            price: '666'
          }
        ],
      }
      wx.setNavigationBarTitle({
        title: this.data.currentCategory.name,
      });
      this.setData({
        tab: {
          ...this.data.tab,
          list: tabs,
          selectedId: tabs.length ? tabs[0].id : undefined,
        },
        allData: allData,
        currentGoods: tabs.length ? allData[tabs[0].id] || [] : [],
      });
    },
    handleZanTabChange(e) {
      var selectedId = e.selectedId;
      this.setData({
        'tab.selectedId': selectedId,
        currentGoods: this.data.allData[selectedId] || [],
      });
    },
    changeDisplayType: function () {
      var currentDisplayType = this.data.displayType;
      if (currentDisplayType === 'line') {
        this.setData({
          displayType: 'block',
        });
      } else {
        this.setData({
          displayType: 'line',
        });
      }
    }
  })
)