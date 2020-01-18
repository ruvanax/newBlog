<template>
    <div v-if="currentTheme" style="margin: 0 10%">
        <div>
            <b-card :title="currentTheme.theme" style="max-width: 40rem; min-width: 15rem; text-align: center" header-tag="header" footer-tag="footer">
                <template v-slot:header>
                    <b-button-close @click="handleCloseTheme"/>
                </template>
                <b-card-text style="text-align: left">
                    {{currentTheme.text}}
                </b-card-text>
                <template v-slot:footer>
                    <div style="text-align: right">
                        <b-link @click="handleEditTheme">Редактировать</b-link>
                    </div>
                </template>
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "viewingTab",
        props: [],
        data(){
            return{

            }
        },
        methods:{
            handleCloseTheme(){
                this.$store.dispatch("handleClearCurrentTheme");
            },
            handleEditTheme(){

            }
        },
        computed:{
            currentTheme(){
                return this.$store.getters.currentTheme;
            }
        },
        components:{

        },
        mounted(){

        }
    }
</script>

<style>

</style>