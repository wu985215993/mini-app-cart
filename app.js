// app.js 创建一个小程序
App({
    // 生命中期函数
    // 在小程序启动的时候，自动执行的函数
    // scene场景指的是从哪个入口进来的
    onLaunch(options){
      console.log('onLaunch',options);
      this.sayHello()
    },
    // 在小程序重新展示的时候执行的函数
    onShow(options){
      console.log('onShow',options);
    },
    // 在小程序取消展示的时候执行的函数无参数
    onHide(){
      console.log('onHide');
    },
    //当脚本执行错误时自动执行的函数
    onError(msg){
      console.log('onError',msg);
    },
    sayHello(){
      return 'say Hello'
    },
    globalData: {
    }
})
