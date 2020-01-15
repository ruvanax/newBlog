<template>
    <div>
        <div style="margin: 2%">
            <b-container fluid>
                <b-row>
                    <b-col cols="12" sm="12" md="6">
                        <div>
                            <b-link>Отобразить только мои темы</b-link>
                        </div>
                    </b-col>
                    <b-col cols="12" sm="12" md="6">
                        <div>
                            <b-link>Удалить моего пользователя</b-link>
                        </div>
                    </b-col>
                </b-row>
                <div style="margin: 20px 0"></div>
                <b-row>
                    <b-col cols="10">
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