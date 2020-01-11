import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);


const state = {
    user: {},
    themesList: []
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
    },
    handleSetPostsToTheList(context){
        context.dispatch("handleGetPosts").then(themesList =>{
            console.log("themesList", themesList);
            context.commit("SET_THEMES_TO_THE_LIST", themesList.themes);
        });
    },
    handleOpenTheme(context, id){
        return new Promise((resolve) =>{
            axios.get(`./rest/posts/openTheme/${id}`).then(response =>{
                // console.log(response.data);
                resolve(response.data);
            })
        });
    }
};

const getters = {
    themesList(state){
        return state.themesList;
    }
};
const mutations = {
    SET_THEMES_TO_THE_LIST(state, themesList){
        if(themesList && themesList.length){
            state.themesList = [...themesList];
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};