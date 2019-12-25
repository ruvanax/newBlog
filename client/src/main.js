import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
// import store from './components';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(Vuex);

import indexStore from './components/index.js';
import authStore from './components/main/auth/auth.js';
import postsStore from './components/main/posts/posts.js';

Vue.use(BootstrapVue);

console.log("authStore", authStore);

Vue.config.productionTip = false;

const store = new Vuex.Store({
	modules:{
		mIndex: indexStore,
		mAuth: authStore,
		mPosts: postsStore
	}
});

new Vue({
	store,
  	render: h => h(App),
}).$mount('#app');
