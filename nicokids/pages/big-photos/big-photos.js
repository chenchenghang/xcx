var o = getApp(); Page({ data: { isIpx: o.globalData.isIpx, showModal: !0, imgUrls: ["http://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/NICO8090.JPG", "http://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/NICO7945.JPG", "http://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/NICO8033.JPG"] }, onLoad: function (o) { }, onReady: function () { }, onShow: function () { }, onHide: function () { }, onUnload: function () { }, onPullDownRefresh: function () { }, onReachBottom: function () { }, onShareAppMessage: function () { }, closeModal: function () { this.setData({ showModal: !1 }) }, savePhotosHandler: function () { wx.showToast({ title: "已存入相册", icon: "success", mask: !0, success: function (o) { }, fail: function (o) { }, complete: function (o) { } }) } }); 