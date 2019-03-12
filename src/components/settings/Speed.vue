<template>
    <div>
        <v-subheader>Скорость</v-subheader>
        <v-slider
                :min="-10"
                :max="20"
                step="1"
                v-model="speed"
                @change="changeSpeed"
                thumb-label
        ></v-slider>
    </div>
</template>

<script>
    import {bus} from '../../bus'

    export default {
        name: "Speed",
        data() {
            return {
                speed: 0
            }
        },
        methods:{
            changeSpeed(){
                bus.$emit("change-speed", this.speed);
            }
        }
    }
</script>

<style scoped>

</style>