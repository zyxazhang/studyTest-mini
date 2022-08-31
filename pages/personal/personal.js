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
          { name: '各科成绩', key: 'score', icon: 'icon-chengjiguanli-01' },
          { name: '我的奖品', key: 'prize', icon: 'icon-fuli-selected' },
          { name: '日志', key: 'log', icon: 'icon-rizhi' },
          { name: '地址管理', key: 'addressManagement', icon: 'icon-dizhiguanli' },
        ]
      },
      {
        name: '2',
        children: [
          {
            name: '意见反馈',
            key: 'feedback', 
            icon: 'icon-yijianfankui'
          },
          {
            name: '联系作者',
            key: 'contactAuthor', 
            icon: 'icon-duanxin'
          }
        ]
      },
      {
        name: '3',
        children: [
          {
            name: '账号设置',
            key: 'setting', 
            icon: 'icon-settings'
          }
        ]
      },
    ]
  },
  handleJump(e) {
    console.log('sasds', e.currentTarget.dataset.id)
    const url = `/pages/components/${e.currentTarget.dataset.id}/${e.currentTarget.dataset.id}` 
    wx.navigateTo({ url})
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