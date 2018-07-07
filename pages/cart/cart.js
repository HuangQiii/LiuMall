var app = getApp();

Page({
  data: {
    cartGoods: [
      {
        id: '1',
        checked: true,
        picUrl: '../../images/wudong2.jpg',
        name: '你还要我怎样',
        spec: '啦啦啦啦啦啦啦啦啦啦啦',
        number: 1,
        price: '688.00',
      },
      {
        id: '2',
        checked: true,
        picUrl: '../../images/wudong3.jpg',
        name: '要怎样',
        spec: '哈哈哈哈哈哈哈哈哈哈',
        number: 1,
        price: '888.00',
      },
      {
        id: '3',
        checked: false,
        picUrl: '../../images/wudong.jpg',
        name: '你还要我怎样',
        spec: '啦啦啦啦啦啦啦啦啦啦啦',
        number: 1,
        price: '688.00',
      },
      {
        id: '4',
        checked: false,
        picUrl: '../../images/wudong4.jpg',
        name: '要怎样',
        spec: '哈哈哈哈哈哈哈哈哈哈',
        number: 1,
        price: '888.00',
      }
    ],
    checkedGoodsCount: 2,
    checkedGoodsAmount: '',
    isEdit: false,
    checkedAllStatus: true
  },
  
  onShow: function () {
    this.setData({
      checkedGoodsCount: this.getCheckedGoodsCount(),
      checkedGoodsAmount: this.getCheckedGoodsAmount()
    });
  },

  checkedItem: function (e) {
    let index = e.target.dataset.index
    let id = e.target.dataset.id
    this.setData({
      [`cartGoods[${index}].checked`]: !this.data.cartGoods[index].checked,
      checkedGoodsCount: this.getCheckedGoodsCount(),
      checkedGoodsAmount: this.getCheckedGoodsAmount()
    });
    this.setData({
      checkedGoodsCount: this.getCheckedGoodsCount(),
      checkedGoodsAmount: this.getCheckedGoodsAmount()
    });
  },
  getCheckedGoodsAmount: function () {
    let totalPrice = 0
    this.data.cartGoods.forEach(function (v) {
      if (v.checked) {
        totalPrice += v.price * v.number
      }
    })
    return totalPrice.toFixed(2)
  },
  getCheckedGoodsCount: function () {
    let checkedGoodsCount = 0
    this.data.cartGoods.forEach(function (v) {
      if (v.checked) {
        checkedGoodsCount += v.number
      }
    })
    return checkedGoodsCount
  },
  edit: function () {
    this.setData({
      isEdit: !this.data.isEdit
    });
  },
  checkedAll: function () {
    if (this.data.checkedAllStatus) {
      this.setData({
        checkedAllStatus: !this.data.checkedAllStatus,
        checkedGoodsCount: '',
        checkedGoodsAmount: '0.00'
      });
      for (var i = 0; i < this.data.cartGoods.length;i++){
        this.setData({
          [`cartGoods[${i}].checked`]: false,
        })
      }
    } else {
      for (var i = 0; i < this.data.cartGoods.length; i++) {
        this.setData({
          [`cartGoods[${i}].checked`]: true,
        })
      }
      this.setData({
        checkedAllStatus: !this.data.checkedAllStatus,
        checkedGoodsCount: this.getCheckedGoodsCount(),
        checkedGoodsAmount: this.getCheckedGoodsAmount()
      });
    }
  },
  deleteCart: function () {
    let that = this
    wx.showModal({
      title: '提示',
      content: '确认要删除所选商品？',
      confirmColor: '#fab614',
      success: function (res) {
        if (res.confirm) {
          that.setData({
            cartGoods: []
          })
        } else {
          // cancel
        }
      }
    })
  },
  checkOut: function () {
    // check out
  }
})