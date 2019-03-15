<template>
    <div>
        <v-subheader>Кастомная ссылка</v-subheader>
        <v-text-field
                v-model="value"
                label="Кастомная ссылка на изображение"
                @keydown.enter="addInput"
        ></v-text-field>
        <CustomSelect
                v-for="(item, index) in customSelects"
                :key="index"
                :index="index"
                :value="item.text"
                :visible="item.visible"
                @remove="removeCustomSelect(index)"
        ></CustomSelect>
    </div>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'
    import CustomSelect from './settings/CustomSelect'

    export default {
        name: "CustomSelectWrapper",
        data() {
            return {
                value: ""
            }
        },
        computed: mapState(['customSelects']),
        methods: {
            ...mapMutations(['removeCustomSelect', 'addCustomSelect']),
            addInput() {
                if (this.value === "") return false;

                this.addCustomSelect({text: this.value, visible: true});
                this.value = "";
            }
        },
        components: {
            CustomSelect
        }
    }
</script>

<style scoped>

</style>