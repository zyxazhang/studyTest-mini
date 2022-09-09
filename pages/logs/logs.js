// logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    list: [
      { name: '这是测试1', desc: '', time: '18: 00', img: '../../static/images/naxida.jpg' },
      { name: '这是测试2', desc: '',  time: '18: 00', img: '../../static/images/naxida.jpg' },
      { name: '这是测试3', desc: '',  time: '18: 00', img: '../../static/images/naxida.jpg' },
      { name: '这是测试4', desc: '',  time: '18: 00', img: '../../static/images/naxida.jpg' },
      { name: '这是测试5', desc: '',  time: '18: 00', img: '../../static/images/naxida.jpg' },
      { name: '这是测试6', desc: '',  time: '18: 00', img: '../../static/images/naxida.jpg' },
      { name: '这是测试7', desc: '',  time: '18: 00', img: '../../static/images/naxida.jpg' },
      { name: '这是测试8', desc: '',  time: '18: 00', img: '../../static/images/naxida.jpg' },
      { name: '这是测试9', desc: '',  time: '18: 00', img: '../../static/images/naxida.jpg' },
      { name: '这是测试10', desc: 'dqweqwwwdqwdqwdqqwwwwwwwwwwwwwwweqweqw',  time: '18: 00', img: '../../static/images/naxida.jpg' }
    ]
  },
  viewDetail(e) {
    console.log(e);
    // wx.navigateTo({ url: 'pages/details/details' })
  },
  onLoad() {
  }
})
