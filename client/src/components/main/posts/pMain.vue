<template>
    <div>
        <div class="centralBlock" v-if="userName">
            <b-container fluid>
                <b-row class="justify-content-md-center">
                    <b-col cols="8">
                        <my-p-form/>
                    </b-col>
                    <b-col cols="4">
                        <my-p-themes-list/>
                    </b-col>
                </b-row>

            </b-container>
            <my-dialog/>
        </div>
        <div class="viewingThemeBlock">
            <b-container fluid>
                <b-row class="justify-content-md-center">
                    <b-col cols="12">
                        <my-viewing-tab/>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    import pForm from "./pUserInterface.vue";
    import pThemesList from "./pThemesList.vue";
    import dialog from "./pCreateThemeDialog.vue";
    import viewingTab from "./viewingTab.vue";

    export default {
        name: "pMain",
        props: [],
        data(){
            return{

            }
        },
        methods:{

        },
        computed:{
            userName(){
                if(this.$store.getters.user && this.$store.getters.user.username){
                    return this.$store.getters.user.username;
                }
            }
        },
        components:{
            "my-p-form": pForm,
            "my-p-themes-list": pThemesList,
            "my-dialog": dialog,
            "my-viewing-tab": viewingTab
        },
        mounted(){

        }
    }
</script>

<style>
    div.centralBlock{
        /*max-width: 800px;*/
        margin: 40px 10px;
        border: 1px solid black;
        max-height: 400px;
    }
    div.centralBlock div.centralBlockThemeForm{
        margin: 20px 0;
    }
    div.viewingThemeBlock{
        /*border: 1px solid grey;*/
        /*max-height: 300px;*/
    }
</style>