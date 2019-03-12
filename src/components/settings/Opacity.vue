<template>
    <div>
        <v-subheader>Прозрачность</v-subheader>
        <v-slider
                v-model="slider"
                @change="changeOpacity"
                :max="1"
                step="0.01"
                :min="0"
                thumb-label
        ></v-slider>
    </div>
</template>

<script>
    import {bus} from '../../bus'

    export default {
        name: "Opacity",
        data(){
            return{
                slider:0.8
            }
        },
        methods:{
            changeOpacity(){
                bus.$emit("change-opacity", this.slider);
            }
        }
    }
</script>

<style scoped>

</style>