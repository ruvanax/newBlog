<template>
  <div class="mainClass">
    <my-auth/>
    <my-p-main/>
<!--    <my-p-img/>-->
  </div>
</template>

<script>
import auth from "./auth/auth.vue"
import pMain from "./posts/pMain.vue";
import pImg from "./pImg.vue";

export default {
  name: 'Main',
  props: [],
  data(){
    return{
      
    }
  },
  components:{
   "my-auth": auth,
    "my-p-main": pMain,
    "my-p-img": pImg
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