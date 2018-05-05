import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '地区选择',
    navigationBarBackgroundColor: "#fff",
    navigationBarTextStyle: "black"
  }
}
