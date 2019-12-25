<template>
  <div>
    <my-header/>
    <my-main/>
    <!-- <my-footer></my-footer> -->
  </div>
</template>

<script>
import Header from "./header/header.vue"
import Main from "./main/main.vue"
import Footer from "./footer/footer.vue"

export default {
  name: 'Index',
  props: [],
  data(){
    return{

    }
  },
  components:{
    "my-header": Header,
    "my-main": Main,
    "my-footer": Footer
  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
