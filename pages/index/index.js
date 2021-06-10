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
        title: 'C语言系统化精讲  重塑你的编程思想 打造坚实的开发基础',
        promotion: true,
        price: 299,
        notice: 'APP购买立减 ￥3',
        level: '进阶',
        sales: 794
      },
      {
        imgUrl: 'https://img4.mukewang.com/szimg/5fdb394608def73a00000000.jpg',
        title: '迈向高级的Java面试突围课',
        promotion: true,
        price: 299,
        notice: 'APP购买立减 ￥3',
        level: '高阶',
        sales: 588
      },
      {
        imgUrl: 'https://img3.mukewang.com/szimg/5ed0bbc908af61c706000338.jpg',
        title: '体系课-数据可视化入门到精通-打造前端差异化竞争力',
        promotion: true,
        price: 999,
        notice: 'APP购买立减 ￥3',
        level: '进阶',
        sales: 932
      },
      {
        imgUrl: 'https://img1.mukewang.com/szimg/5fb49a98095edbf712000676.png',
        title: 'Vue3 从入门到实战 进阶式掌握完整知识体系',
        promotion: true,
        price: 348,
        notice: 'APP购买立减 ￥3',
        level: '进阶',
        sales: 1197
      },
      {
        imgUrl: 'https://img2.mukewang.com/szimg/5f979613090e48bb12000676.png',
        title: '体系课-Go+Python双语言混合开发 盯紧技术先机 抓紧高薪机遇',
        promotion: true,
        price: 1680,
        notice: 'APP购买立减 ￥3',
        level: '进阶',
        sales: 287
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