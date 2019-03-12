<template>
    <div class="blocks">
        <Block
                v-for="block in blocks"
                :angle="block.angle"
                :key="block.id"
                :speed="block.speed(coefSpeed)"
                :x="block.x"
                :id="'block-'+block.id"
                :src="block.src"
                :opacity="block.opacity"
                :width="block.width(minSize, maxSize, maxDistance)"
                :height="block.width(minSize, maxSize, maxDistance)"
        ></Block>
    </div>
</template>

<script>
    import {bus} from '../bus'
    import Block from './Block'

    export default {
        name: "Blocks",
        data() {
            return {
                blocks: [],
                background: [],
                customSelectedAry:[],
                multiSelectedAry:[],
                opacity:0.8,
                coefSpeed:0,
                minSize:50,
                maxSize:300,
                maxDistance:100
            }
        },
        mounted() {
            bus.$on("selected", this.selected);
            bus.$on("custom-selected", this.customSelected);
            bus.$on("change-opacity", (opacity) => this.opacity = opacity);
            bus.$on("change-speed", (speed) => this.coefSpeed = speed);
            bus.$on("change-size", (size) => {
                this.minSize = size.min;
                this.maxSize = size.max;
            });
            bus.$on("change-distance", (distance) => {
                this.maxDistance = distance.max;
            });

            setInterval(this.addBlock, 1000);
            setInterval(this.removeBlocks, 1000);
        },
        methods: {
            addBlock() {
                this.blocks.push({
                    speed(coef) {
                        return Math.abs(this.distance) * 0.1 + 5 + coef;
                    },
                    x: Math.random() * window.innerWidth - 150,
                    id: Math.random() * 100000000,
                    angle: Math.random() * 360,
                    src: this.getSrc(this.background),
                    opacity:this.opacity,
                    width(minSize, maxSize, maxDistance) {
                        return Math.abs(this.distance - maxDistance) * ((maxSize-minSize)/maxDistance) + minSize;
                    },
                    // height:this.width(),
                    distance: Math.random() * this.maxDistance
                });
            },
            removeBlocks() {
                this.blocks.forEach((block, index) => {
                    if (document.getElementById("block-" + block.id) === undefined) return;

                    let blockInf = document.getElementById("block-" + block.id).getBoundingClientRect();
                    if (blockInf.y > window.innerHeight + 600) this.blocks.splice(index, 1);
                });
            },
            selected(ary) {
                this.multiSelectedAry = ary;
                this.mergeSelections();
            },
            customSelected(ary){
                this.customSelectedAry = ary;
                this.mergeSelections();
            },
            mergeSelections(){
                this.background=[...this.multiSelectedAry, ...this.customSelectedAry];
            },
            getSrc(ary) {
                return ary.length ? ary[Math.round(Math.random() * (ary.length - 1))] : ""
            }
        },
        components: {
            Block
        }
    }
</script>

<style scoped>

</style>