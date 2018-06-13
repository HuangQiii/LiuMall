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
        },
        {
          id: '3',
          imgUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FoR36ELDFVsXHuRwdkHvgHfHULlw'
        },
        {
          id: '4',
          imgUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FpiLlu57NsXO97RR08rsP9CVHXK_'
        },
        {
          id: '5',
          imgUrl: 'http://ow2h3ee9w.bkt.clouddn.com/Fv-R586maGmYxIm0mq_POxUEaiZ6'
        }
      ],
      goods: {
        name: 'IPhone X 全面屏 全面绽放 256G',
        description: '全面屏，全面绽放。',
        price: '1.00',
      },
      brands: [
        {
          name: '官方自营品牌',
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
  })
)