var t = getApp(),
  e = require("../../utils/util.js"),
  a = require("../../nitro.js"),
  o = {
    theme: {
      title: "小主题系列",
      subtitle: "适合年龄：23个月以上，提供服装/可自带衣服",
      slogan: "100%保证客片效果/丰富主题选择"
    },
    look: {
      title: "LOOK 系列",
      subtitle: "适合年龄：23个月以上 提供服装/可自带衣服/含全家福",
      slogan: "时尚大片/创意场景/独一无二"
    },
    face: {
      title: "FACE 系列",
      subtitle: "适合年龄：23个月以上 提供服装/可自带衣服/含全家福",
      slogan: "纯净清爽/耐看/经典大头照"
    },
    baby: {
      title: "BABY 系列",
      subtitle: "适合年龄：10个月-23个月 提供服装/可自带衣服/含全家福",
      slogan: "可爱呆萌/温馨满满"
    }
  },
  n = function(t, a) {
    return t.forEach(function(t) {
      t.packages = [], t.gallery = [], a.forEach(function(a) {
        a.category && a.category.id == t.id && (t.packages.push(a), t.gallery = e.shuffle(t.gallery.concat(a.gallery)).slice(0, 15))
      }), t.hasSubItems = t.title.indexOf("小主题") > -1, t.title.includes("小主题") ? (t.mp_info = o.theme, t.is_themes = !0) : t.title.toLowerCase().includes("look") ? t.mp_info = o.look : t.title.toLowerCase().includes("face") ? t.mp_info = o.face : t.title.toLowerCase().includes("baby") && (t.mp_info = o.baby)
    }), t.filter(function(t) {
      return t.publish
    })
  };
Page({
  data: {
    isIpx: t.globalData.isIpx,
    storeId: "",
    disabledScroll: !1,
    categories: [],
    gallery: {},
    imgUrls: ["https://nitro-prod.oss-cn-hangzhou.aliyuncs.com/public/mp-banner-3.jpg", "https://nitro-prod.oss-cn-hangzhou.aliyuncs.com/public/mp-banner-4.jpg"],
    artworkTabs: e.config("artworkTabs"),
    indicatorDots: !1,
    autoplay: !1,
    interval: 5e3,
    duration: 1e3
  },
  onLoad: function(e) {
    var a = e.store_id || "a13e5bca9835edf92bb4aa50";
    t.globalData.ts = +new Date, wx.showLoading({}), this.setData({
      storeId: a
    }), this.initData(a)
  },
  onReady: function() {
    wx.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#ffffff",
      animation: {
        duration: 400,
        timingFunc: "easeIn"
      }
    })
  },
  onShow: function() {
    this.setData({
      artworkTabs: e.config("artworkTabs").map(function(t) {
        return t.active = !1, t
      })
    })
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {
    return {
      title: "尼可儿童摄影",
      path: "/pages/stores/stores"
    }
  },
  initData: function(o) {
    var i = this,
      r = o || a.getStore()._id;
    console.info("initData start", +new Date - t.globalData.ts), a.fetchProducts(r).then(function(o) {
      var r = n(o.categories, o.items),
        c = r.find(function(t) {
          return t.is_themes
        }).packages.map(function(t) {
          return {
            title: t.title,
            id: t._id,
            cover: t.gallery.length && t.gallery[0].url.raw,
            category_id: t.category._id
          }
        }),
        s = e.chunkArray(c.filter(function(t) {
          return t.cover
        }), 6);
      i.setData({
        store: a.getStore(),
        packageLoaded: !0,
        categories: r,
        themeGroups: s
      }), wx.setNavigationBarTitle({
        title: "" + i.data.store.name
      }), wx.hideLoading(), console.info("hideLoading", +new Date - t.globalData.ts)
    })
  },
  onPreviewSlides: function(t) {
    t.currentTarget.dataset.url;
    var e = t.currentTarget.dataset.category;
    t.currentTarget.dataset.package;
    wx.navigateTo({
      url: "/pages/product-detail/product-detail?category_id=" + e,
      success: function(t) {},
      fail: function(t) {},
      complete: function(t) {}
    })
  },
  loadThemePhotos: function(t) {
    var e = t.currentTarget.dataset.id;
    console.log("e.currentTarget.dataset", t.currentTarget.dataset), wx.navigateTo({
      url: "/pages/themes/themes?category_id=" + e,
      success: function(t) {},
      fail: function(t) {},
      complete: function(t) {}
    })
  },
  loadMorePhotos: function(t) {
    var e = t.currentTarget.dataset.category;
    t.currentTarget.dataset.package;
    wx.navigateTo({
      url: "/pages/product-detail/product-detail?category_id=" + e,
      success: function(t) {},
      fail: function(t) {},
      complete: function(t) {}
    })
  },
  gotoProductDetail: function(t) {
    var e = t.currentTarget.dataset.categoryid;
    wx.navigateTo({
      url: "/pages/product-detail/product-detail?category_id=" + e,
      success: function(t) {},
      fail: function(t) {},
      complete: function(t) {}
    })
  },
  onSwitchTab: function(t) {
    var e = t.currentTarget.dataset.categoryid;
    wx.navigateTo({
      url: "/pages/product-detail/product-detail?category_id=" + e,
      success: function(t) {},
      fail: function(t) {},
      complete: function(t) {}
    })
  }
});