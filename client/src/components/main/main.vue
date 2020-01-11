<template>
  <div class="mainClass">
    <my-auth/>
    <my-p-main/>
  </div>
</template>

<script>
import auth from "./auth/auth.vue"
import pMain from "./posts/pMain.vue";

export default {
  name: 'Main',
  props: [],
  data(){
    return{
      
    }
  },
  components:{
   "my-auth": auth,
    "my-p-main": pMain
  },
  computed:{

  },
  methods:{
  
  },
  mounted(){

  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  div.mainClass{
    margin: 5px;
    padding: 1px;
  }
</style>