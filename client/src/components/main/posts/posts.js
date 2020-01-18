import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);


const state = {
    user: {},
    themesList: [],
    currentTheme: null,
    userTrigger: false
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
    handleSetPostsToTheList(context, themes){
        context.commit("SET_THEMES_TO_THE_LIST", themes);
    },
    handleOpenTheme(context, id){
        return new Promise((resolve) =>{
            axios.get(`./rest/posts/openTheme/${id}`).then(response =>{
                // console.log(response.data);
                resolve(response.data);
            })
        });
    },
    getPostsCreatedBySingleUser(context, id){
        return new Promise((resolve) =>{
            axios.get(`./rest/posts/getSingleUserPosts/${id}`).then(response =>{
                context.commit("SET_USER_TRIGGER", true);
                resolve(response.data);
            })
        });
    },
    handleSetCurrentTheme(context, currentTheme){
        context.commit("SET_CURRENT_THEME", currentTheme);
    },
    handleClearCurrentTheme(context){
        context.commit("SET_CURRENT_THEME", null);
    }
};

const getters = {
    themesList(state){
        return state.themesList;
    },
    currentTheme(state){
        return state.currentTheme;
    },
    userTrigger(state){
        return state.userTrigger;
    }
};
const mutations = {
    SET_THEMES_TO_THE_LIST(state, themesList){
        if(themesList && themesList.length){
            state.themesList = [...themesList];
        }else{
            state.themesList = [];
        }
    },
    SET_CURRENT_THEME(state, currentTheme){
        state.currentTheme = currentTheme;
    },
    SET_USER_TRIGGER(state, bool){
        state.userTrigger = bool;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};