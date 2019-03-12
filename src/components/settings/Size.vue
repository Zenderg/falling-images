<template>
    <div>
        <v-subheader>
            Минимальный размер
        </v-subheader>
        <v-text-field
                @change="changeSize"
                v-model="min"
                type="number"
                suffix="px"
        ></v-text-field>
        <v-subheader>
            Максимальный размер
        </v-subheader>
        <v-text-field
                @change="changeSize"
                v-model="max"
                type="number"
                suffix="px"
        ></v-text-field>
    </div>
</template>

<script>
    import {bus} from '../../bus'
    export default {
        name: "Size",
        data(){
            return{
                min:50,
                max:300
            }
        },
        methods:{
            changeSize(){
                bus.$emit("change-size", {min:Number(this.min), max:Number(this.max)});
            }
        }
    }
</script>

<style scoped>

</style>