var app = getApp();

Page({
  data: {
    delBtnWidth: 180,
    cartGoods: [
      {
        id: '1',
        checked: true,
        picUrl: '../../images/wudong2.jpg',
        name: '你还要我怎样',
        spec: '啦啦啦啦啦啦啦啦啦啦啦',
        number: 1,
        price: '688.00',
        txtStyle: "",
      },
      {
        id: '2',
        checked: true,
        picUrl: '../../images/wudong3.jpg',
        name: '要怎样',
        spec: '哈哈哈哈哈哈哈哈哈哈',
        number: 1,
        price: '888.00',
        txtStyle: "",
      },
      // {
      //   id: '3',
      //   checked: false,
      //   picUrl: '../../images/wudong.jpg',
      //   name: '你还要我怎样',
      //   spec: '啦啦啦啦啦啦啦啦啦啦啦',
      //   number: 1,
      //   price: '688.00',
      //   txtStyle: "",
      // },
      // {
      //   id: '4',
      //   checked: false,
      //   picUrl: '../../images/wudong4.jpg',
      //   name: '要怎样',
      //   spec: '哈哈哈哈哈哈哈哈哈哈',
      //   number: 1,
      //   price: '888.00',
      //   txtStyle: "",
      // }
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
  },
  touchS: function (e) {
    console.log(e);
    if (e.touches.length == 1) {
      this.setData({
        //设置触摸起始点水平方向位置
        startX: e.touches[0].clientX
      });
    }
  },
  touchM: function (e) {
    if (e.touches.length == 1) {
      //手指移动时水平方向位置
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:0px";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "px";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "px";
        }
      }
      //获取手指触摸的是哪一项
      // var id = e.target.dataset.index;
      var id = e.currentTarget.dataset.index;
      var cartGoods = this.data.cartGoods;
      const index = cartGoods.findIndex(v => v.id === id);
      if(index > -1) {
        cartGoods[index].txtStyle = txtStyle;
        //更新列表的状态
        this.setData({
          cartGoods: cartGoods,
        });
      }
    }
  },

  touchE: function (e) {
    if (e.changedTouches.length == 1) {
      //手指移动结束后水平位置
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = this.data.startX - endX;
      var delBtnWidth = this.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "rpx" : "left:0rpx";
      //获取手指触摸的是哪一项
      // var id = e.target.dataset.index;
      var id = e.currentTarget.dataset.index;
      var cartGoods = this.data.cartGoods;
      const index = cartGoods.findIndex(v => v.id === id);
      if (index >= 0) {
        cartGoods[index].txtStyle = txtStyle;
        //更新列表的状态
        this.setData({
          cartGoods: cartGoods,
        });
      }
    }
  },
  //获取元素自适应后的实际宽度
  getEleWidth: function (w) {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750 / 2) / (w / 2);//以宽度750px设计稿做宽度的自适应
      // console.log(scale);
      real = Math.floor(res / scale);
      return real;
    } catch (e) {
      return false;
      // Do something when catch error
    }
  },
  initEleWidth: function () {
    var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
    this.setData({
      delBtnWidth: delBtnWidth
    });
  },
  delItem: function (e) {
    const id = e.target.dataset.index;
    const cartGoods = this.data.cartGoods;
    const index = cartGoods.findIndex(v => v.id === id);
    cartGoods.splice(index, 1);
    this.setData({
      cartGoods: cartGoods,
    });
  },

})