<template>
  <div class="userMenu">
    <form id="userMenuForm" @submit.prevent="submitForm" autocomplete="off">
      <div class="userMenuFormBlock">
        <label class="userMenuFormLabel" for="userName">name: </label>
        <input type="text" name="userName" id="userName" v-model="registerForm.name">
        <p v-if="formErrors.name">{{formErrors.name}}</p>
      </div>
      <div class="userMenuFormBlock">
        <label class="userMenuFormLabel" for="userName">password: </label>
        <input type="text" name="userPassword" id="userPassword" v-model="registerForm.password">
        <p v-if="formErrors.password">{{formErrors.password}}</p>
      </div>
      <div class="userMenuFormBlock">
        <label class="userMenuFormLabel" for="userName">confirmation: </label> 
        <input type="text" name="userConfirmationPassword" id="userConfirmationPassword" v-model="registerForm.confirmation">
        <p v-if="formErrors.confirmation">{{formErrors.confirmation}}</p>
      </div>
      <div class="userMenuFormButtons">
        <button type="submit">Отправить</button>
        <button @click="handleCancel">Отмена</button>
      </div>
    </form>
  </div>
</template>

<script>
const ERROR_TYPES ={
  REQUIRED: "Внимание, поле обязательно для заполнения!",
  INVALID_SYMBOLS: "Внимание, в поле присутствуют недопустимые символы!"
};

export default {
  name: 'register',
  props: [],
  data(){
    return{
        registerForm: {
          name: "",
          password: "",
          confirmation: ""
        },
        errors:{}
    }
  },
  components:{
   
  },
  computed:{
    formErrors(){
      return this.errors;
    }
  },
  methods:{
    submitForm(e){
      const callback = function(){
        return this.$store.dispatch("handleRegister", this.registerForm).then(res =>{
          this.$store.dispatch("handleSetUserName", res.user);
          this.handleCancel();
        });
      }.bind(this);
      this.validateForm(callback);
    },
    handleCancel(){
      this.$emit("handleClearForm");
    },
    validateForm(callback){
      const form = this.registerForm;
      for(let key in form){
        if(form.hasOwnProperty(key)){
          // this.$set(this.errors, key, "");
          if(this.errors.hasOwnProperty(key)){
            delete this.errors[key];
          }
          if(key === "name"){
            if(form[key] === ""){
              this.$set(this.errors, key, ERROR_TYPES.REQUIRED);
              continue;
            }
            const reg = /^[\_\-.a-zA-Zа-яА-ЯёЁ0-9\s]+$/;
            if(!form[key].match(reg)){
              this.$set(this.errors, key, ERROR_TYPES.INVALID_SYMBOLS);
              continue;
            }
          }else if(key === "password" || key === "confirmation"){
              if(form[key] === ""){
                this.$set(this.errors, key, ERROR_TYPES.REQUIRED);
                continue;
              }
              const reg = /^[\_\-.a-zA-Zа-яА-ЯёЁ0-9\s]+$/;
              if(!form[key].match(reg)){
                this.$set(this.errors, key, ERROR_TYPES.INVALID_SYMBOLS);
                continue;
              }
            }
        }
      }
      if(!Object.keys(this.errors).length){
        callback();
      }
    }
  },
  mounted(){

  },
  created(){
    
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