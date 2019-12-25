<template>
  <div class="userMenu">
    <form id="userMenuForm" @submit.prevent="submitForm" autocomplete="off">
      <div class="userMenuFormBlock">
        <label class="userMenuFormLabel" for="userName">name: </label>
        <input type="text" name="userName" id="userName"  v-model="deletingForm.name">
      </div>
      <div class="userMenuFormButtons">
        <button type="submit">Удалить</button>
        <button @click="handleCancel">Отмена</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'login',
  props: [],
  data(){
    return{
      deletingForm: {
        name: ""
      }
    }
  },
  components:{
   
  },
  computed:{

  },
  methods:{
    submitForm(){
      this.$store.dispatch("handleDelete", this.deletingForm).then(res =>{
        console.log("res", res);
      });
    },
    handleCancel(){
      this.$emit("handleClearForm");
    },
    validateForm(callback){
      
    }
  },
  mounted(){
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  div.userMenu{
    padding: 5px;
    /*border: 1px solid black;*/
    float: left;
  }
  div.userMenu .userMenuFormBlock{
    margin: 5px 0;
  }
  div.userMenu label.userMenuFormLabel{
    display: inline-block;
    width: 100px;
  }
  div.userMenu input[type="text"]{
    width: 200px;
  }
</style>