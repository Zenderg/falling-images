<template>
    <div>
        <v-subheader>Прозрачность</v-subheader>
        <v-slider
                :value="opacity"
                @change="setOpacity($event)"
                :max="1"
                step="0.01"
                :min="0"
                thumb-label
        ></v-slider>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "Opacity",
        computed: mapState(['opacity']),
        methods: {...mapMutations(['setOpacity'])}
    }
</script>

<style scoped>

</style>