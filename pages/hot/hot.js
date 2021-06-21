Page({
  listDATA: {},
  data: {
    rankType: undefined,
    rankTypes: [{
        title: '实战排行',
        type: 'project'
      },
      {
        title: '路径排行',
        type: 'path'
      }
    ],
    rankPeriod: undefined,
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
    wx.request({
      url: 'https://www.fastmock.site/mock/c111f5d5e2b292b850b0db0188818df0/wechat/api/getRecommend',
      success: (res) => {
        const {
          data: {
            data
          }
        } = res;
        this.listDATA = data;
        const rankPeriod = wx.getStorageSync('rankPeriod') || 'week';
        const rankType = wx.getStorageSync('rankType') || 'project';
        this.setData({
          rankPeriod,
          rankType
        })
        this.changeCurrentList(rankType, rankPeriod)
      }
    })
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
    wx.setStorage({
      data: rankType,
      key: 'rankType'
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
    wx.setStorage({
      data: rankPeriod,
      key: 'rankPeriod'
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