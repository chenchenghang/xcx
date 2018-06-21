var o = getApp();
require("../../utils/util.js");
Page({
  data: {},
  onLoad: function(o) {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  refreshUserProfile: function() {
    o.getRequest(o.globalData.BASE_URL + "/auth/profile", {}).then(function(n) {
      console.log("userInfo", n), o.globalData.userInfo = n, wx.setStorageSync("userInfo", n)
    })
  },
  quickLogin: function(n) {
    var e = this,
      t = o.globalData.code;
    o.postRequest(o.globalData.BASE_URL + "/auth/wx/checkin", {
      js_code: t
    }).then(function(t) {
      o.globalData.token = t.token, o.postRequest(o.globalData.BASE_URL + "/auth/wx/mobile", {
        encryptedData: n.detail.encryptedData,
        vi: n.detail.iv
      }).then(function(n) {
        console.log("quickLogin success", n), o.globalData.token = n.token, o.globalData.userId = n.user_id, wx.setStorageSync("token", n.token), wx.setStorageSync("userId", n.user_id), e.refreshUserProfile(), wx.reLaunch({
          url: "/pages/stores/stores",
          success: function(o) {},
          fail: function(o) {},
          complete: function(o) {}
        })
      }, function(n) {
        o.showErrorMsg("", "微信登录失败，请重试。"), setTimeout(function() {
          wx.reLaunch({
            url: "/pages/stores/stores",
            success: function(o) {},
            fail: function(o) {},
            complete: function(o) {}
          })
        }, 2e3)
      })
    })
  },
  loginByPhone: function() {
    wx.navigateTo({
      url: "/pages/login-by-phone/login-by-phone",
      success: function(o) {},
      fail: function(o) {},
      complete: function(o) {}
    })
  }
});