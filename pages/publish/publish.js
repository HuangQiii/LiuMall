const { extend } = require('../../zanui/dist/index');

Page(extend({},
  {
    data: {
      gallery: [
        {
          id: '1',
          imgUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FuMpJKl7eTLaSAZCY0wS_ZfA9nZu'
        },
        {
          id: '2',
          imgUrl: 'http://ow2h3ee9w.bkt.clouddn.com/Fjyrefco9QCd1VMgiuQNoOCcPVtF'
        }
      ],
      goods: {
        name: 'Liu Mall平台专属IPhone X 全面屏 全面绽放',
        description: '全面屏，全面绽放。',
        price: '1.00',
      },
      brands: [
        {
          name: '超低价',
          brandId: '1'
        },
        {
          name: '新品',
          brandId: '1'
        }
      ],
      attribute: [
        {
          name: '颜色',
          value: '灰色、黑色'
        },
        {
          name: '容量',
          value: '64G、256G'
        }
      ],
      items: [
        {
          padding: 0,
          value: '1',
          name: '在售',
        },
        {
          padding: 0,
          value: '2',
          name: '已售',
        },
      ],

      checked: {
        base: -1,
        color: -1,
        form: -1
      },

      activeColor: '#fab614',
      imageList: [],
    },
    addToCart: function () {
      // if (!this.data.isLogin) {
      //   return
      // }
      wx.showToast({
        title: '添加购物车成功',
        icon: 'success',
      })
    },
    openIndexPage: function () {
      wx.switchTab({
        url: '/pages/index/index'
      });
    },
    openBrand: function (e) {
      let title = e.target.dataset.value
      console.log(title);
    },
    handleSelectChange({ currentTarget = {}, detail = {} }) {
      const { value = '' } = detail;
      const { dataset = {} } = currentTarget;
      const type = dataset.type;
      this.setData({
        [`checked.${type}`]: value
      });
    },
    chooseImage: function () {
      var that = this
      wx.chooseImage({
        sourceType: ['camera', 'album'],
        sizeType: ['compressed', 'original'],
        count: 5,
        success: function (res) {
          console.log(res)
          const origin = that.data.imageList.slice();
          origin.concat(res.tempFilePaths);
          that.setData({
            imageList: origin.concat(res.tempFilePaths),
          });
        }
      })
    },
    previewImage: function (e) {
      var current = e.target.dataset.src

      wx.previewImage({
        current: current,
        urls: this.data.imageList
      })
    }
  })
)