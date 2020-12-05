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
import zSwiper from './components/zSwiper/zSwiper.vue' 
import uniIcon from './components/uni-icons/uni-icons.vue' 

Vue.component('zSearchBar',zSearchBar)
Vue.component('zButton',zButton)
Vue.component('zCard',zCard)
Vue.component('zBearchBar',zBearchBar)
Vue.component('zSwiper',zSwiper)
Vue.component('uniIcon',uniIcon)


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
