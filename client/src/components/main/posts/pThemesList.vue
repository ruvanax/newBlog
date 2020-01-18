<template>
    <div style="max-height: 380px; overflow: auto; margin: 0 10%">
        <div v-for="(item, index) in themesList" style="margin: 5px 0;">
            <span @click="handleOpenTheme(item._id)" style="text-decoration: underline; cursor: pointer;">{{item.theme}}</span>
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
                this.$store.dispatch("handleOpenTheme", id).then(data =>{
                    this.$store.dispatch("handleSetCurrentTheme", data.theme);
                });
            }
        },
        computed:{
            themesList(){
                return this.$store.getters.themesList;
            }
        },
        components:{

        },
        mounted(){
            this.$store.dispatch("handleGetPosts").then(data =>{
                this.$store.dispatch("handleSetPostsToTheList", data.themes);
            });
        }
    }
</script>

<style>

</style>