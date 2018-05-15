import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '删除demo',
    navigationBarBackgroundColor: '#007CDE',
    navigationBarTextStyle: 'light',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark'
  },
  disableScrol: true
}
