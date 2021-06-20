Page({
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
    ]
  },
  handleTabChange(e) {
    const rankType = e.currentTarget.dataset.type;
    this.setData({
      rankType
    })
  },
  handlePeriodChange(e) {
    const rankPeriod = e.currentTarget.dataset.type;
    this.setData({
      rankPeriod
    })
  }
})