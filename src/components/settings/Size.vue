<template>
    <div>
        <v-subheader>
            Минимальный размер
        </v-subheader>
        <v-text-field
                @change="setSize({min: $event, max: max})"
                :value="min"
                type="number"
                suffix="px"
        ></v-text-field>
        <v-subheader>
            Максимальный размер
        </v-subheader>
        <v-text-field
                @change="setSize({min: min, max:$event})"
                :value="max"
                type="number"
                suffix="px"
        ></v-text-field>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "Size",
        computed: mapState({max: 'maxSize', min: 'minSize'}),
        methods: {...mapMutations(['setSize'])}
    }
</script>

<style scoped>

</style>