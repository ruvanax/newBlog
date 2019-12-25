<template>
    <div>
        <div v-for="(item, index) in themesArr">
            {{item.theme}}
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

        },
        computed:{
            userName(){
                if(this.$store.getters.user && this.$store.getters.user.username){
                    return this.$store.getters.user.username;
                }
            },
            themes(){

            }
        },
        components:{

        },
        mounted(){
            this.$store.dispatch("handleGetPosts").then(data =>{
                console.log("data", data);
                this.themesArr = [...data];
            });
        }
    }
</script>

<style>

</style>