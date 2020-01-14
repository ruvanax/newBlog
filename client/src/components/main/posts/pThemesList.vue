<template>
    <div style="height: 280px; overflow: auto">
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
            userName(){
                if(this.$store.getters.user && this.$store.getters.user.username){
                    return this.$store.getters.user.username;
                }
            },
            themesList(){
                return this.$store.getters.themesList;
            }
        },
        components:{

        },
        mounted(){
            this.$store.dispatch("handleSetPostsToTheList");
        }
    }
</script>

<style>

</style>