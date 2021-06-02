// index.js
// 获取应用实例
const app = getApp()
Page({
  onLoad(){
    console.log(app.sayHello(),app.globalData,'index onLoad');
  }
})
