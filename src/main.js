import Vue from 'vue'
import App from './App'
import PrivateComponents from './components/index'
import toast from './utils/toast'
import publicRequest from './utils/publicRequest'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(PrivateComponents)

Vue.prototype.$totast = toast

Vue.prototype.publicRequest = publicRequest

const app = new Vue(App)
app.$mount()



export default {
  config: {
    pages: ['pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
};
