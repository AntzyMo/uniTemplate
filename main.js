import Vue from 'vue'
import App from './App'
// 方法
import commMethond from './mixins/index.js'
Vue.mixin(commMethond)

// 组件
import zSearchBar from './components/z-search-bar/z-search-bar.vue'
import zButton from './components/zButton/zButton.vue' 
import zCard from './components/zCard/zCard.vue' 
import zBearchBar from './components/z-search-bar/z-search-bar.vue' 
import zSwiper from './components/zSwiper/index.vue' 
import uniIcon from './components/uni-icons/uni-icons.vue' 
import zNav from './components/zNav/index.vue'
import zSelect from './components/zSelect/zSelect.vue'
Vue.component('zSearchBar',zSearchBar)
Vue.component('zButton',zButton)
Vue.component('zCard',zCard)
Vue.component('zBearchBar',zBearchBar)
Vue.component('zSwiper',zSwiper)
Vue.component('uniIcon',uniIcon)
Vue.component('zNav',zNav)
Vue.component('zSelect',zSelect)



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
