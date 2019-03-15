<template>
    <div>
        <v-subheader>
            Максимальная дистанция
        </v-subheader>
        <v-text-field
                @change="setDistance({max: $event})"
                :value="max"
                type="number"
        ></v-text-field>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "Distance",
        computed: mapState({max: 'maxDistance'}),
        methods: {...mapMutations(['setDistance'])}
    }
</script>

<style scoped>

</style>