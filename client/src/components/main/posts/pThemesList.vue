<template>
    <div>
        <div v-for="(item, index) in themesArr">
            <span @click="handleOpenTheme(item._id)">{{item.theme}}</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: "pThemesList",
        props: [],
        data(){
            return{
                themesArr: []
            }
        },
        methods:{
            handleOpenTheme(id){
                this.$store.dispatch("handleOpenTheme", id).then(res =>{

                });
            }
        },
        computed:{
            userName(){
                if(this.$store.getters.user && this.$store.getters.user.username){
                    return this.$store.getters.user.username;
                }
            },
            themes(){

            },

        },
        components:{

        },
        mounted(){
            this.$store.dispatch("handleGetPosts").then(data =>{
                if(data.themes && data.themes.length){
                    this.themesArr = [...data.themes];
                }
            });
        }
    }
</script>

<style>

</style>