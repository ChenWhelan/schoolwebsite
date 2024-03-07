import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import {xlrswiper,xlrswiperitem} from 'xlrswiper'
import "xlrswiper/style/xlr-swiper.css"
import VueResource from 'vue-resource'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import '@/theme/index.css'
import axios from 'axios'

Vue.prototype.$axios = axios
//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)
Vue.use(xlrswiper)
Vue.use(xlrswiperitem)
Vue.use(ElementUI);
Vue.use(VueResource);


new Vue({
	el:'#app',
	render: h => h(App),
	router:router,

	
});
router.afterEach(() => {
	window.scrollTo(0,0);
  
  });