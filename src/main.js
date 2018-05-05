import Vue from 'vue'
import App from './App'
import store from './stores/index'
import PrivateComponents from './components/index'
import toast from './utils/toast'
import publicRequest from './utils/publicRequest'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(PrivateComponents)

Vue.prototype.$store = store

Vue.prototype.$totast = toast

Vue.prototype.publicRequest = publicRequest

const app = new Vue(App)
app.$mount()



export default {
  config: {
    pages: ['^pages/login/main', 'pages/location/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#2574a9',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: '#fff'
    }
  }
};
