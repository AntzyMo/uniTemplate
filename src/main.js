import Vue from 'vue'
import App from './App'
// 方法
import commMethond from './mixins/index.js'
Vue.mixin(commMethond)


// 组件
import BtnCom from './components/BtnCom/index.vue' 
import CardCom from './components/CardCom/index.vue' 
import SelectCom from './components/SelectCom/index.vue'
import TabPane from './components/TabCom/tab-pane.vue'

Vue.component('BtnCom',BtnCom)
Vue.component('CardCom',CardCom)
Vue.component('SelectCom',SelectCom)
Vue.component('TabPane',TabPane)

import * as url from './utils/url.js'
Vue.prototype.$url=url.baserul
Vue.prototype.$imgurl=url.imgurl

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
