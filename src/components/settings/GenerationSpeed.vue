<template>
    <div>
        <v-subheader>Скорость генерации (мс)</v-subheader>
        <v-slider
                :min="50"
                :max="5000"
                step="50"
                :value="generationSpeed"
                @change="changeGenerationSpeed"
                thumb-label
        ></v-slider>
    </div>
</template>

<script>
    import {bus} from '../../bus'
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "GenerateSpeed",
        computed: mapState(['generationSpeed']),
        methods: {
            ...mapMutations(['setGenerationSpeed']),
            changeGenerationSpeed(val) {
                this.setGenerationSpeed(val);
                bus.$emit('change-generation-speed');
            }
        }

    }
</script>

<style scoped>

</style>