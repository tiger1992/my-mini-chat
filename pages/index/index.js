
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/image/beautiful/beautiful001.jpg',
      '/image/beautiful/beautiful002.jpg',
      '/image/beautiful/beautiful003.jpg',
      '/image/beautiful/beautiful008.jpg',
      '/image/beautiful/beautiful009.jpg',
      '/image/beautiful/beautiful010.jpg',
      '/image/beautiful/beautiful011.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular:false,
  },
  onLoad:function(){
    
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  circularChange: function (e) {
    this.setData({
      circular: !this.data.circular
    })
  },

  //index页面进行的分享按钮
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
      
    }
    return {
      title: '分享-青春年华相册',
      path: '/pages/share/share',
      imageUrl: '/image/beautiful/beautiful011.jpg'
    }
  }
})
