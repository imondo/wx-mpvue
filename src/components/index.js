import Toast from './Toast/index'

const components = [
  Toast
]

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
