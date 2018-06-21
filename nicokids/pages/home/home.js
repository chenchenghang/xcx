require("../../utils/util.js"), getApp();
Page({
  data: {
    homeList: [{
      image: "home-idea.png",
      image_mini: "home-idea-mini.png",
      height: "180rpx",
      opened: !1
    }, {
      image: "home-commercial.png",
      image_mini: "home-commercial-mini.png",
      height: "300rpx",
      opened: !1
    }, {
      image: "home-samples.png",
      image_mini: "home-samples-mini.png",
      height: "180rpx",
      opened: !1
    }, {
      image: "home-concept.png",
      image_mini: "home-concept-mini.png",
      height: "120rpx",
      opened: !1
    }, {
      image: "home-contact.png",
      image_mini: "home-contact-mini.png",
      height: "120rpx",
      opened: !1
    }]
  },
  onLoad: function(e) {
    wx.navigateTo({
      url: "/pages/stores/stores",
      success: function(e) {},
      fail: function(e) {},
      complete: function(e) {}
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  homeItemTapHandler: function(e) {
    var n = e.currentTarget.dataset.index;
    this.data.homeList[n].opened ? this.data.homeList[n].opened = !1 : (this.data.homeList.forEach(function(e) {
      e.opened = !1
    }), this.data.homeList[n].opened = !0), this.setData({
      homeList: this.data.homeList
    })
  },
  catchItemTapHandler: function(e) {
    wx.switchTab({
      url: "/pages/artworks/artworks"
    })
  }
});