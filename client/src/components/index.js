import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);


const indexStore = new Vuex.Store({
	state:{

	},
	actions:{
		handleTest(context){
			return new Promise((resolve) =>{
				axios.get("./rest/me").then(response =>{
					// console.log(response.data);
					resolve(response.data);
				})
			});
		},

	},
	mutations:{

	},
	getters:{

	}
});

export default indexStore;