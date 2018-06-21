var o = getApp();
Page({
    data: {
        isIpx: o.globalData.isIpx,
        showConfirmModal: !1,
        showModifyModal: !1,
        imgUrls: ["https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P1.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P2.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P3.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P4.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P5.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P6.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P7.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P8.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P9.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P10.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P11.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P12.jpg", "https://nicokids-storage.oss-cn-hangzhou.aliyuncs.com/tmp/print_demo/P13.jpg"]
    },
    onLoad: function(o) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    showModalHandler: function(o) {
        1 == o.target.dataset.operation ? this.setData({
            showConfirmModal: !0
        }) : this.setData({
            showModifyModal: !0
        })
    },
    closeModal: function() {


        this.setData({
            showConfirmModal: !1,
            showModifyModal: !1
        })
    },
    confirmHandler: function() {


    	
        this.setData({
            showConfirmModal: !1
        }),
        wx.showToast({
            title: "精修排版已确认",
            icon: "success",
            mask: !0,
            success: function(o) {},
            fail: function(o) {},
            complete: function(o) {}
        })
    },
    submitHandler: function() {
        this.setData({
            showModifyModal: !1
        }),
        wx.showToast({
            title: "修改意见已提交",
            icon: "success",
            mask: !0,
            success: function(o) {},
            fail: function(o) {},
            complete: function(o) {}
        })
    },
    previewImgHandler: function(o) {
        var s = o.currentTarget.dataset.index;
        wx.previewImage({
            current: this.data.imgUrls[s],
            urls: this.data.imgUrls,
            success: function(o) {},
            fail: function(o) {},
            complete: function(o) {}
        })
    }
});