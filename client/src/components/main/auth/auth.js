import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

const state = {
    user: {}
};

const actions = {
    handleSetUserName(context, user){
        context.commit("SET_USERNAME", user);
    },
    handleGetCurrentUser(context){
        return new Promise((resolve) =>{
            axios.get("./rest/users/current").then(response =>{
                // console.log(response.data);
                resolve(response.data);
            })
        });
    },
    handleRegister(context, data){
        return new Promise((resolve) =>{
            axios.post("./rest/users/register", data).then(response =>{
                // console.log(response.data);
                resolve(response.data);
            })
        });
    },
    handleLogin(context, data){
        return new Promise((resolve) =>{
            axios.post("./rest/users/login", data).then(response =>{
                // console.log(response.data);
                resolve(response.data);
            })
        });
    },
    handleLogout(context){
        return new Promise((resolve) =>{
            axios.get("./rest/users/logout").then(response =>{
                // console.log(response.data);
                resolve(response.data);
            })
        });
    },
    handleDelete(context, data){
        return new Promise((resolve) =>{
            axios.post("./rest/users/delete", data).then(response =>{
                // console.log(response.data);
                resolve(response.data);
            })
        });
    }
};

const getters = {
    user: state => state.user
};
const mutations = {
    SET_USERNAME(state, user){
        state.user = user;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};