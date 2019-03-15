<template>
    <div>
        <v-subheader>Скорость падения</v-subheader>
        <v-slider
                :min="-10"
                :max="20"
                step="1"
                :value="speed"
                @change="setFallingSpeed($event)"
                thumb-label
        ></v-slider>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "Speed",
        computed: mapState({speed: "coefFallingSpeed"}),
        methods: {...mapMutations(['setFallingSpeed'])}
    }
</script>

<style scoped>

</style>