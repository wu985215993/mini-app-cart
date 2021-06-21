Page({
  listDATA: {
    projectWeek: [{
        imgUrl: 'http://img.mukewang.com/szimg/5e3cfea008e9a61b06000338-358-201.jpg',
        title: '前端框架及项目面试 聚焦Vue3/React/Webpack',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/59b8a486000107fb05400300-358-201.jpg',
        title: '全面系统Python3.8入门+进阶 (程序员必备第二语言)',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60497caf0971842912000676-358-201.jpg',
        title: 'Flutter高级进阶实战  仿哔哩哔哩APP',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60793fbd09beb96f12000676-358-201.jpg',
        title: 'Vue3+ElementPlus+Koa2 全栈开发后台系统',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60b989060887207412000676-358-201.jpg',
        title: '高并发 高性能 高可用 MySQL 实战',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60223b5d09e0c94412000676-358-201.jpg',
        title: 'Spring Boot + Vue3 前后端分离，实战wiki知识库系统',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60497caf0971842912000676-358-201.jpg',
        title: 'Flutter高级进阶实战  仿哔哩哔哩APP',
      },
    ],
    projectMonth: [{
        imgUrl: 'http://img.mukewang.com/szimg/5e3cfea008e9a61b06000338-358-201.jpg',
        title: '前端框架及项目面试 聚焦Vue3/React/Webpack',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/59b8a486000107fb05400300-358-201.jpg',
        title: '全面系统Python3.8入门+进阶 (程序员必备第二语言)',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60b989060887207412000676-358-201.jpg',
        title: '高并发 高性能 高可用 MySQL 实战',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60793fbd09beb96f12000676-358-201.jpg',
        title: 'Vue3+ElementPlus+Koa2 全栈开发后台系统',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60223b5d09e0c94412000676-358-201.jpg',
        title: 'Spring Boot + Vue3 前后端分离，实战wiki知识库系统',
      },
    ],
    pathWeek: [{
        imgUrl: 'http://img.mukewang.com/szimg/59b8a486000107fb05400300-358-201.jpg',
        title: '全面系统Python3.8入门+进阶 (程序员必备第二语言)',
      }, {
        imgUrl: 'http://img.mukewang.com/szimg/5e3cfea008e9a61b06000338-358-201.jpg',
        title: '前端框架及项目面试 聚焦Vue3/React/Webpack',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60497caf0971842912000676-358-201.jpg',
        title: 'Flutter高级进阶实战  仿哔哩哔哩APP',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60793fbd09beb96f12000676-358-201.jpg',
        title: 'Vue3+ElementPlus+Koa2 全栈开发后台系统',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60b989060887207412000676-358-201.jpg',
        title: '高并发 高性能 高可用 MySQL 实战',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60223b5d09e0c94412000676-358-201.jpg',
        title: 'Spring Boot + Vue3 前后端分离，实战wiki知识库系统',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60497caf0971842912000676-358-201.jpg',
        title: 'Flutter高级进阶实战  仿哔哩哔哩APP',
      },
    ],
    pathMonth: [{
        imgUrl: 'http://img.mukewang.com/szimg/5e3cfea008e9a61b06000338-358-201.jpg',
        title: '前端框架及项目面试 聚焦Vue3/React/Webpack',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/59b8a486000107fb05400300-358-201.jpg',
        title: '全面系统Python3.8入门+进阶 (程序员必备第二语言)',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60b989060887207412000676-358-201.jpg',
        title: '高并发 高性能 高可用 MySQL 实战',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60793fbd09beb96f12000676-358-201.jpg',
        title: 'Vue3+ElementPlus+Koa2 全栈开发后台系统',
      },
      {
        imgUrl: 'http://img.mukewang.com/szimg/60223b5d09e0c94412000676-358-201.jpg',
        title: 'Spring Boot + Vue3 前后端分离，实战wiki知识库系统',
      },
    ]
  },
  data: {
    rankType: 'project',
    rankTypes: [{
        title: '实战排行',
        type: 'project'
      },
      {
        title: '路径排行',
        type: 'path'
      }
    ],
    rankPeriod: 'week',
    rankPeriods: [{
        title: '周',
        value: 'week'
      },
      {
        title: '月',
        value: 'month'
      },
    ],
    currentList: []
  },
  onLoad() {
    this.changeCurrentList(this.data.rankType, this.data.rankPeriod)
  },
  handleTabChange(e) {
    const rankType = e.currentTarget.dataset.type;
    const {
      rankPeriod
    } =
    this.data;
    this.setData({
      rankType,
    })
    this.changeCurrentList(rankType, rankPeriod)
  },
  handlePeriodChange(e) {
    const rankPeriod = e.currentTarget.dataset.type;
    const {
      rankType
    } = this.data
    this.setData({
      rankPeriod
    })
    this.changeCurrentList(rankType, rankPeriod)
  },
  changeCurrentList(rankType, periodType) {
    let currentList = [];
    if (rankType === 'project' && periodType === 'week') {
      currentList = this.listDATA.projectWeek;
    } else if (rankType === 'project' && periodType === 'month') {
      currentList = this.listDATA.projectMonth;
    } else if (rankType === 'path' && periodType === 'week') {
      currentList = this.listDATA.pathWeek;
    } else {
      currentList = this.listDATA.pathMonth;
    }
    this.setData({
      currentList
    })
  }
})