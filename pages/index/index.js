// index.js
// 获取应用实例
Page({
  data: {
    showIcon: true,
    swiperList: [{
        imgUrl: 'http://img.mukewang.com/60b5083509ab754600000000.png'
      },
      {
        imgUrl: 'http://img.mukewang.com/60b5084b091d043518000600.png'
      },
      {
        imgUrl: 'http://img.mukewang.com/60b5085f09b03c5b18000600.png'
      },
    ],
    courses:[
      {
        imgUrl: 'https://img2.mukewang.com/szimg/5fbf616b09c6210a12000676.png',
        title: '微信小程序入门与实战常用组件开发技巧API 项目实战',
        promotion: true,
        price: 198,
        notice: 'APP购买立减 ￥3',
        level: '中级',
        sales: 2892
      },
      {
        imgUrl: 'https://img2.mukewang.com/szimg/5fbf616b09c6210a12000676.png',
        title: '微信小程序入门与实战常用组件开发技巧API 项目实战',
        promotion: true,
        price: 198,
        notice: 'APP购买立减 ￥3',
        level: '中级',
        sales: 2892
      },
      {
        imgUrl: 'https://img2.mukewang.com/szimg/5fbf616b09c6210a12000676.png',
        title: '微信小程序入门与实战常用组件开发技巧API 项目实战',
        promotion: true,
        price: 198,
        notice: 'APP购买立减 ￥3',
        level: '中级',
        sales: 2892
      },
      {
        imgUrl: 'https://img2.mukewang.com/szimg/5fbf616b09c6210a12000676.png',
        title: '微信小程序入门与实战常用组件开发技巧API 项目实战',
        promotion: true,
        price: 198,
        notice: 'APP购买立减 ￥3',
        level: '中级',
        sales: 2892
      },
      {
        imgUrl: 'https://img2.mukewang.com/szimg/5fbf616b09c6210a12000676.png',
        title: '微信小程序入门与实战常用组件开发技巧API 项目实战',
        promotion: true,
        price: 198,
        notice: 'APP购买立减 ￥3',
        level: '中级',
        sales: 2892
      },

    ]
  },
  handleInputChange(e) {
    const value = e.detail.value;
    this.setData({
      showIcon: value ? false : true
    })
  }
})