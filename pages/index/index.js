// index.js
// 获取应用实例
Page({
  data: {
    showIcon: true,
    swiperList: [],
    courses:[],
    searchList: null,
    type: 'recommend',
    tabs: [
      {name: "推荐",type: "recommend"},
      {name: "路径",type: "path"},
      {name: "实战",type: "project"},
      {name: "活动",type: "activity"},
    ],
    activities:[]
  },
  onLoad(){
    wx.request({
      url: 'https://www.fastmock.site/mock/c111f5d5e2b292b850b0db0188818df0/wechat/api/getData',
      success: (res) => {
        const {data:{data}} = res;
        const {swiperList,courses,activities} = data;
        this.setData({
          swiperList,
          courses,
          activities
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
  },
  changeType(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({ type });
  }
})