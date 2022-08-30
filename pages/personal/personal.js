// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '1',
        children: [
          { name: '各科成绩', icon: '' },
          { name: '我的奖品', icon: '' },
          { name: '日志', icon: '' }
        ]
      },
      {
        name: '2',
        children: [
          {
            name: '意见反馈',
            icon: ''
          },
          {
            name: '联系作者',
            icon: ''
          }
        ]
      },
      {
        name: '3',
        children: [
          {
            name: '账号设置',
            icon: ''
          }
        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})