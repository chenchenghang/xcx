var t = getApp(),
  e = null;
Page({
  data: {
    time: 60,
     love: 60,
    sended: !1,
    phone: "",
    authcode: ""
  },
  onLoad: function(t) {},
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  bindInputPhone: function(t) {
    var e = t.detail.value;
    11 === e.length && this.setData({
      phone: e
    })
  },
  bindInputAuthCode: function(t) {

    var e = t.detail.value;
    4 === e.length && this.setData({
      authcode: e
    })
  },
  sendCodeHandler: function() {
    console.log("tip");
    var e = this;
    if (this.data.phone) {
      t.globalData.code;
      t.postRequest(t.globalData.BASE_URL + "/api/verificationWeChatCodes", {
        phone: this.data.phone,
        //country_code: "86"
      }).then(function(t) {
        e.setData({
          sended: !0
        }), e.startTimer()
      })
    }
  },
  startTimer: function() {
    var t = this;
    e = setInterval(function() {
      t.data.time > 0 ? (t.data.time -= 1, t.setData({
        time: t.data.time
      })) : (t.setData({
        sended: !1,
        time: 6
      }), clearInterval(e))
    }, 1e3)
  },
  loginByPhone: function(e) {
    var n = e.detail.value.phone,
      o = e.detail.value.authcode,
      a = t.globalData.code;
    n ? o ? t.postRequest(t.globalData.BASE_URL + "/auth/mobile/signin", {
      mobile: n,
      country_code: "86",
      code: o,
      session_code: a
    }).then(function(e) {
      t.globalData.token = e.token, t.globalData.userId = e.user_id, wx.setStorageSync("token", e.token), wx.setStorageSync("userId", e.user_id), wx.reLaunch({
        url: "/pages/stores/stores",
        success: function(t) {},
        fail: function(t) {},
        complete: function(t) {}
      })
    }, function(e) {
      t.showErrorMsg("", "微信登录失败，请重试。"), setTimeout(function() {
        wx.reLaunch({
          url: "/pages/stores/stores",
          success: function(t) {},
          fail: function(t) {},
          complete: function(t) {}
        })
      }, 2e3)
    }) : t.showErrorMsg("验证码不能为空") : t.showErrorMsg("手机号不能为空")
  }
});