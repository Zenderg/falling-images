<template>
    <div @click.stop="show=true" :style="{transform: (show) ? '' : 'translateX(-320px)', overflowY: 'scroll'}"
         id="sidebar">
        <div class="close">
            <v-icon @click.stop="show = false">close</v-icon>
        </div>
        <TemplateSelect></TemplateSelect>
        <CustomSelectWrapper></CustomSelectWrapper>
        <Opacity></Opacity>
        <Speed></Speed>
        <Size></Size>
        <Distance></Distance>
        <GenerationQuantity></GenerationQuantity>
        <GenerationSpeed></GenerationSpeed>
        <LinkGenerator></LinkGenerator>
    </div>
</template>

<script>
    import {bus} from '../bus'
    import TemplateSelect from './settings/TemplateSelect'
    import CustomSelectWrapper from './CustomSelectWrapper'
    import Opacity from './settings/Opacity'
    import Speed from './settings/Speed'
    import Size from './settings/Size'
    import Distance from './settings/Distance'
    import GenerationQuantity from './settings/GenerationQuantity'
    import GenerationSpeed from './settings/GenerationSpeed'
    import LinkGenerator from './LinkGenerator'

    export default {
        name: "Sidebar",
        data() {
            return {
                show: false
            }
        },
        mounted() {
            bus.$on("showSidebar", () => this.show = true);
            bus.$on("hideSidebar", () => this.show = false);

            document.addEventListener('click', () => this.show = false);
        },
        methods: {},
        components: {
            TemplateSelect,
            CustomSelectWrapper,
            Opacity,
            Speed,
            Size,
            Distance,
            GenerationQuantity,
            GenerationSpeed,
            LinkGenerator
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
        padding: 50px 15px 15px 15px;
        transition: 0.3s transform;
    }

    .close {
        position: fixed;
        top: 0;
        left: 0;
        width: 310px;
        display: flex;
        justify-content: center;
        background-color: #fff;
        z-index: 11;
        padding: 10px 0;
    }
</style>