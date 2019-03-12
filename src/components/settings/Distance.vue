<template>
    <div>
        <v-subheader>
            Максимальная дистанция
        </v-subheader>
        <v-text-field
                @change="changeDistance"
                v-model="max"
                type="number"
        ></v-text-field>
    </div>
</template>

<script>
    import {bus} from '../../bus'

    export default {
        name: "Distance",
        data(){
            return{
                max:100
            }
        },
        methods:{
            changeDistance(){
                bus.$emit("change-distance", {max:Number(this.max)});
            }
        }
    }
</script>

<style scoped>

</style>