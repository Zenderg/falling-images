<template>
    <div class="custom-select">
        <v-text-field
                :value="value"
                @change="updateCustomSelect({index:index, prop:'text', context:$event})"
                append-icon="close"
                :prepend-icon="visible ? 'visibility' : 'visibility_off'"
                @click:prepend="updateCustomSelect({index:index, prop:'visible', context:!visible})"
                @click:append="$emit('remove')"
        ></v-text-field>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "CustomSelect",
        props: {
            value: String,
            index: Number,
            visible: Boolean
        },
        methods: {...mapMutations(['updateCustomSelect'])}
    }
</script>

<style scoped>

</style>