var t = getApp(), e = [{ name: "居左", value: "left", selected: !0 }, { name: "居中", value: "middle", selected: !1 }, { name: "居右", value: "right", selected: !1 }]; Page({ data: { isIpx: t.globalData.isIpx, imgUrls: ["http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg", "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"], tempData: e, showModal: !1, sendWords: !0, format: "left", checkEffect: !1, gestureWords: "" }, onLoad: function (t) { }, onReady: function () { }, onShow: function () { }, onHide: function () { }, onUnload: function () { }, onPullDownRefresh: function () { }, onReachBottom: function () { }, onShareAppMessage: function () { }, checkDemosHandler: function () { this.setData({ showModal: !0 }) }, closeModalHandler: function () { this.setData({ showModal: !1, checkEffect: !1 }) }, switchChangeHandler: function (t) { var e = t.detail.value; this.setData({ sendWords: e }) }, selectFormatHandler: function (t) { var e = t.detail.value; this.setData({ format: e }) }, getWordsHandler: function (t) { var e = t.detail.value; this.setData({ gestureWords: e }) }, alignTapHandler: function (t) { var e = t.currentTarget.dataset.index; this.data.tempData.forEach(function (t) { t.selected = !1 }), this.data.tempData[e].selected = !0, this.setData({ tempData: this.data.tempData }) }, previewWordsHandler: function () { this.data.gestureWords && this.setData({ checkEffect: !0 }) }, wordsSubmit: function (t) { t.detail.value; console.log(t), wx.showToast({ title: "寄语已提交", icon: "success", mask: !0, success: function (t) { }, fail: function (t) { }, complete: function (t) { } }) } });