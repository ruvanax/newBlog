<template>
  <div>
    <template v-if="componentType">
      <component :is="componentType"
                 v-on:handleClearForm="handleClearForm"/>
    </template>
    <template v-else>
      <template v-if="userName">
        <div class="mainMenuBlock">
          <span style="color: darkblue">Вы вошли как: {{userName}}</span>
        </div>
        <div class="mainMenuBlock">
          <a @click="handleLogout">logout</a>
        </div>
      </template>
      <template v-else>
        <div class="mainMenuBlock">
          <a @click="handleShowRegisterForm">register</a>
        </div>
        <div class="mainMenuBlock">
          <a @click="handleShowLoginForm">login</a>
        </div>
        <div class="mainMenuBlock">
          <a @click="handleShowDeletingForm">deleting</a>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import register from "./register.vue"
import login from "./login.vue"
import deleting from "./deleting.vue"

export default {
  name: 'Main',
  props: [],
  data(){
    return{
      componentType: null
    }
  },
  components:{
   "my-register": register,
   "my-login": login,
   "my-deleting": deleting
  },
  computed:{
      userName(){
        if(this.$store.getters.user && this.$store.getters.user.username){
          return this.$store.getters.user.username;
        }
      }
  },
  methods:{
    handleShowRegisterForm(){
      this.componentType = "my-register";
    },
    handleShowLoginForm(){
      this.componentType = "my-login";
    },
    handleClearForm(user){
      // this.$store.dispatch("handleTest");
      this.componentType = null;
    },
    handleShowDeletingForm(){
      this.componentType = "my-deleting";
    },
    handleLogout(){
      this.$store.dispatch("handleLogout").then(res =>{
        this.$store.dispatch("handleSetUserName", res.user);
      });
    }
  },
  mounted(){
      this.$store.dispatch("handleGetCurrentUser").then(user =>{
        this.$store.dispatch("handleSetUserName", user);
      });
  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  div.mainMenuBlock{
    display: inline-block;
    margin: 5px;
  }
  div.mainMenuBlock a{
    cursor: pointer;
  }
</style>