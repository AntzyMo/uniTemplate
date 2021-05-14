import Vue from "vue";
import comInJs from './index.vue';

// 生成一个 comInJs 组件的构造函数
let comInJsConstructor = Vue.extend(comInJs)

// 生成方法
let ComInJs = _ => {
	// new实例
	let instance = new comInJsConstructor().$mount();
	document.body.appendChild(instance.$el);

	Vue.prototype.$closeBox = _ => {
		return instance.closeBox()
	}

	Vue.prototype.$showBox = _ => {
		return instance.showBox()
	}

}



export default ComInJs;