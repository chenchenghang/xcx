var o = require("../../nitro.js"),
  t = getApp();
Page({
  data: { isIpx: t.globalData.isIpx, stores: [] },
  onLoad: function (o) { },
  onReady: function () { },
  onShow: function () {
    var e = this;
    wx.showLoading({ title: "" }), wx.setNavigationBarTitle({ title: "尼可儿童摄影" }), delete t.globalData.categories, delete t.globalData.items, delete t.globalData.themeGroups, console.info("onShow clean data", t.globalData), console.info("onShown"), t.login(function () { console.info("app.login()"), console.info("stores", o.getStore()), e.setData({ loaded: !0, stores: o.getStores() }), wx.hideLoading() })
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  initStores: function () { },
  storeTapHandler: function (e) {
    var n = e.currentTarget.dataset.storeid,
      a = this.data.stores.find(function (o) { return o.id === n });
    console.log("storeId storeTapHandler", n), o.setStore(n), t.globalData.cart.store = a, t.globalData.cart.storeId = n;
    wx.navigateTo({ url: "/pages/artworks/artworks?store_id=" + n, success: function (o) { }, fail: function (o) { }, complete: function (o) { } })
  },
  storeChooseHandler: function () {
    var o = void 0;
    this.data.stores.forEach(function (t) { t.opened && (o = t.id) })
  }
});