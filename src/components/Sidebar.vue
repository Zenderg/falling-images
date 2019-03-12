<template>
    <div :style="{transform: (show) ? 'translateX(0px)' : 'translateX(-320px)', overflowY: 'scroll'}" id="sidebar">
        <div>
            <v-icon @click="show = false">close</v-icon>
            <MultiSelect></MultiSelect>
            <CustomSelect></CustomSelect>
            <Opacity></Opacity>
            <Speed></Speed>
            <Size></Size>
            <Distance></Distance>
        </div>
    </div>
</template>

<script>
    import {bus} from '../bus'
    import MultiSelect from './settings/MultiSelect'
    import CustomSelect from './settings/CustomSelect'
    import Opacity from './settings/Opacity'
    import Speed from './settings/Speed'
    import Size from './settings/Size'
    import Distance from './settings/Distance'

    export default {
        name: "Sidebar",
        data(){
          return{
              show:false
          }
        },
        mounted() {
            bus.$on("showSidebar", () => this.show = true);
            bus.$on("hideSidebar", () => this.show = false);
        },
        methods: {

        },
        components: {
            MultiSelect,
            CustomSelect,
            Opacity,
            Speed,
            Size,
            Distance
        }
    }
</script>

<style scoped>
    #sidebar {
        position: fixed;
        left: 0;
        bottom: 0;
        top: 0;
        width: 320px;
        z-index: 10;
        background-color: #fff;
        padding: 15px;
        transition: 0.3s transform;
    }
</style>