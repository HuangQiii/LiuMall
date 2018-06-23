Page({
  data: {
    banner: [
      {
        id: 1,
        type: 0,
        linkId: 1,
        bannerName: '',
        imageUrl: 'https://img.alicdn.com/tps/i4/TB1ADXlqLiSBuNkSnhJSuvDcpXa.jpg_490x490q100.jpg_.webp'
      },
      {
        id: 2,
        type: 1,
        linkId: 2,
        bannerName: '',
        imageUrl: 'https://img.alicdn.com/imgextra/i2/2671315119/TB2b2zabvNNTKJjSspeXXaSwpXa_!!2671315119.jpg_490x490q100.jpg_.webp'
      },
      {
        id: 3,
        type: 0,
        linkId: 3,
        bannerName: '',
        imageUrl: 'https://img.alicdn.com/tfs/TB1vvvJyFOWBuNjy0FiXXXFxVXa-468-644.jpg_320x5000q100.jpg_.webp'
      }
    ],
    channel: [
      {
        id: '1',
        type: 0,
        linkId: '3',
        iconUrl: 'close',
        name: 'Type1'
      },
      {
        id: '1',
        type: 0,
        linkId: '3',
        iconUrl: 'location',
        name: 'Type2'
      },
      {
        id: '3',
        type: 1,
        linkId: '3',
        iconUrl: 'clock',
        name: 'Type3'
      },
      {
        id: '4',
        type: 1,
        linkId: '4',
        iconUrl: 'chat',
        name: 'Type4'
      },
      {
        id: '5',
        type: 1,
        linkId: '5',
        iconUrl: 'exchange',
        name: 'Type5'
      },
      {
        id: '6',
        type: 0,
        linkId: '6',
        iconUrl: 'upgrade',
        name: 'Type6'
      },
      {
        id: '7',
        type: 0,
        linkId: '7',
        iconUrl: 'edit',
        name: 'Type7'
      },
      {
        id: '8',
        type: 1,
        linkId: '8',
        iconUrl: 'contact',
        name: 'Type8'
      },
      {
        id: '9',
        type: 1,
        linkId: '9',
        iconUrl: 'passed',
        name: 'Type9'
      },
      {
        id: '10',
        type: 1,
        linkId: '10',
        iconUrl: 'records',
        name: 'Type10'
      }
    ],
    brand: [
      {
        picUrl: '../../images/wudong.jpg',
        name: '产品1',
        description: '产品1的描述',
        price: '1.00'
      },
      {
        picUrl: '../../images/wudong.jpg',
        name: '产品2',
        description: '产品2的描述',
        price: '1.00'
      },
      {
        picUrl: '../../images/wudong.jpg',
        name: '产品3',
        description: '产品3的描述',
        price: '1.00'
      },
      {
        picUrl: '../../images/wudong.jpg',
        name: '产品4',
        description: '产品4的描述',
        price: '1.00'
      }
    ]
  },
  onLoad: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log(res)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },
  bannerNav: function (e) {
    let banner = e.target.dataset.value;
    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  channelNav: function (e) {
    let channel = e.target.dataset.value;
    wx.navigateTo({
      url: '/pages/category/category',
    })
  }
})
