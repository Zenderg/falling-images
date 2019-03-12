<template>
    <div class="custom-select">
        <v-text-field
                v-model="customSelect"
                label="Кастомная ссылка на изображение"
                @input="customSelected"
        ></v-text-field>
    </div>
</template>

<script>
    import {bus} from '../../bus'

    export default {
        name: "CustomSelect",
        data(){
            return{
                customSelect:""
            }
        },
        methods:{
            customSelected(){
                bus.$emit('custom-selected', [this.customSelect]);
            }
        }
    }
</script>

<style scoped>

</style>