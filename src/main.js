// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import FormModel  from 'ant-design-vue';
import {Form} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8080/api'

axios.defaults.baseURL = '/api'

Vue.use(Antd)
Vue.use(FormModel)
Vue.use(Form)
Vue.config.productionTip = false
Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
