import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);


const state = {
    user: {}
};

const actions = {
    handleCreatePost(context, data){
        return new Promise((resolve) =>{
            axios.post("./rest/posts/post", data).then(response =>{
                // console.log(response.data);
                resolve(response.data);
            })
        });
    },
    handleGetPosts(context){
        return new Promise((resolve) =>{
            axios.get("./rest/posts/post").then(response =>{
                // console.log(response.data);
                resolve(response.data);
            })
        });
    }
};

const getters = {
    
};
const mutations = {

};

export default {
    state,
    getters,
    mutations,
    actions
};