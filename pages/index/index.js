// index.js
// 获取应用实例
Page({
  data: {
    showIcon: true,
    swiperList: [],
    courses:[],
    searchList: null
  },
  onLoad(){
    wx.request({
      url: 'https://www.fastmock.site/mock/c111f5d5e2b292b850b0db0188818df0/wechat/api/getData',
      success: (res) => {
        const {data:{data}} = res;
        const {swiperList,courses} = data;
        this.setData({
          swiperList,
          courses
        })
      }
    })
  },
  handleInputChange(e) {
    const value = e.detail.value;
    let searchList = null;
    if(value){
      searchList = this.data.courses.filter(item => item.title.indexOf(value) > -1)
    }
    this.setData({
      showIcon: value ? false : true,
      searchList
    })
  }
})