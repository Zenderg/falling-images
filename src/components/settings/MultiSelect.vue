<template>
    <div class="multi-select">
        <v-select
                @change="multiSelected"
                v-model="multiSelect"
                :items="items"
                label="Шаблоны"
                multiple
                item-text="text"
                item-value="value"
        ></v-select>
    </div>
</template>

<script>
    import {bus} from '../../bus'

    export default {
        name: "MultiSelect",
        data(){
            return{
                multiSelect:[],
                items:[
                    {text:"1C", value:"/1c.webp"},
                    {text:"Angular", value:"/angular.webp"},
                    {text:"C++", value:"/c++.webp"},
                    {text:"Java", value:"/java.webp"},
                    {text:"JS", value:"/js.webp"},
                    {text:"NodeJS", value:"/nodejs.webp"},
                    {text:"PHP", value:"/php.webp"},
                    {text:"React", value:"/react.webp"},
                    {text:"Ruby", value:"/ruby.webp"},
                    {text:"Ubuntu", value:"/ubuntu.webp"},
                    {text:"Vue", value:"/vue.webp"},
                    {text:"Windows", value:"/windows.webp"}
                ]
            }
        },
        mounted(){

        },
        methods:{
            multiSelected(){
                bus.$emit('selected', this.multiSelect);
            }
        }
    }
</script>

<style scoped>

</style>