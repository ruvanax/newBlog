<template>
    <div>
        <b-button @click="handleCreateTheme">{{showThemeForm ? 'Close Form' : 'Create theme'}}</b-button>
        <div class="centralBlockThemeForm">
            <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="showThemeForm">
                <b-form-group
                        id="input-group-1"
                        label="Theme title:"
                        label-for="input-1"
                        description="Another users will see theme names"
                >
                    <b-form-input
                            id="input-1"
                            v-model="themeForm.theme"
                            required
                            placeholder="Enter theme title"
                    />
                </b-form-group>

                <b-form-group id="input-group-2" label="Your Text:" label-for="input-2">
                    <b-form-textarea
                            id="textarea"
                            v-model="themeForm.text"
                            placeholder="Enter something..."
                            size="lg"
                    />
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pForm",
        props: [],
        data(){
            return{
                showThemeForm: false,
                themeForm:{
                    theme: "",
                    text: ""
                }
            }
        },
        methods:{
            handleCreateTheme(){
                this.showThemeForm = !this.showThemeForm;
            },
            onSubmit(){
                this.$store.dispatch("handleCreatePost", this.themeForm).then(res =>{
                    this.showThemeForm = false;
                });
            },
            onReset(){

            }
        },
        computed:{
            userName(){
                if(this.$store.getters.user && this.$store.getters.user.username){
                    return this.$store.getters.user.username;
                }
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>