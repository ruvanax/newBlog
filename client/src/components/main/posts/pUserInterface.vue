<template>
    <div>
        <div style="margin: 15px">
            <b-container fluid>
                <b-row>
                    <b-col cols="4">
                        <b-link>Отобразить только мои темы</b-link>
                    </b-col>
                    <b-col cols="4">
                        <b-link>Удалить моего пользователя</b-link>
                    </b-col>
                </b-row>
                <div style="margin: 20px 0"></div>
                <b-row>
                    <b-col cols="8">
                        <b-button v-b-modal.createThemeDialog>Создать новую тему</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pForm",
        props: [],
        data(){
            return{

            }
        },
        methods:{

        },
        computed:{

        },
        mounted(){
            
        }
    }
</script>

<style>

</style>