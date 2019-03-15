<template>
    <div>
        <v-subheader>
            Кол-во генерируемых блоков
        </v-subheader>
        <v-text-field
                @change="setQuantity"
                :value="quantity"
                type="number"
                suffix="blocks"
        ></v-text-field>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "GenerationQuantity",
        computed: mapState(['quantity']),
        methods: {...mapMutations(['setQuantity'])}
    }
</script>

<style scoped>

</style>