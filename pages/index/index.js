// index.js
// 获取应用实例
Page({
  data: {
    showIcon: true
  },
  handleInputChange(e) {
    const value = e.detail.value;
    this.setData({
      showIcon: value ? false : true
    })
  }
})