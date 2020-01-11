<template>
    <b-modal id="createThemeDialog" ref="createThemeDialog" title="Create New Post">
        <div class="centralBlockThemeForm">
            <b-form>
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
            </b-form>
        </div>
        <template v-slot:modal-footer>
            <b-button type="reset" variant="danger" @click="onReset">Reset</b-button>
            <b-button type="submit" variant="primary" @click="onSubmit">Submit</b-button>
        </template>
    </b-modal>
</template>

<script>
    export default {
        name: "createThemeDialog",
        data(){
            return{
                themeForm:{
                    theme: "",
                    text: ""
                }
            }
        },
        methods:{
            onSubmit(){
                this.validateForm(valid =>{
                    this.$store.dispatch("handleCreatePost", this.themeForm).then(res =>{
                        this.$refs["createThemeDialog"].hide();
                        this.$store.dispatch("handleSetPostsToTheList");
                    });
                });
            },
            onReset(){
                this.$set(this.themeForm, "theme", "");
                this.$set(this.themeForm, "text", "");
            },
            validateForm(callback){

            }
        },
        components:{

        },
        computed:{

        },
        mounted(){

        }
    }
</script>

<style>

</style>