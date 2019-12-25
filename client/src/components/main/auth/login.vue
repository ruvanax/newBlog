<template>
  <div class="userMenu">
    <form id="userMenuForm" @submit.prevent="submitForm" autocomplete="off">
      <div class="userMenuFormBlock">
        <label class="userMenuFormLabel" for="userName">name: </label>
        <input type="text" name="userName" id="userName"  v-model="loginForm.username">
        <p v-if="errors.username">{{errors.username}}</p>
      </div>
      <div class="userMenuFormBlock">
        <label class="userMenuFormLabel" for="userName">password: </label>
        <input type="text" name="userPassword" id="userPassword"  v-model="loginForm.password">
        <p v-if="errors.password">{{errors.password}}</p>
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
  name: 'login',
  props: [],
  data(){
    return{
      loginForm: {
        username: "",
        password: ""
      },
      errors: {

      }
    }
  },
  components:{
   
  },
  computed:{

  },
  methods:{
    submitForm(){
      this.validateForm(valid => {
        if(valid){
          this.$store.dispatch("handleLogin", this.loginForm).then(res =>{
            this.$store.dispatch("handleSetUserName", res.user);
            this.handleCancel();
          });
        }
      });
    },
    handleCancel(){
      this.$emit("handleClearForm");
    },
    validateForm(callback){
      return new Promise((resolve, reject) =>{
        this.errors = {};
        const loginForm = this.loginForm;
        const {username, password} = loginForm;

        if(username === ""){
          this.$set(this.errors, "username", ERROR_TYPES.REQUIRED);
        }

        const reg = /^[\_\-.a-zA-Zа-яА-ЯёЁ0-9\s]+$/;
        if(!username.match(reg)){
          this.$set(this.errors, "username", ERROR_TYPES.INVALID_SYMBOLS);
        }

        if(password === ""){
          this.$set(this.errors, "password", ERROR_TYPES.REQUIRED);
        }

        if(!password.match(reg)){
          this.$set(this.errors, "password", ERROR_TYPES.INVALID_SYMBOLS);
        }

        resolve(!Object.keys(this.errors).length);
      }).then(valid =>{
        callback(valid);
      });
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