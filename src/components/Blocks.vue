<template>
    <div class="blocks">
        <Block
                v-for="block in blocks"
                :angle="block.angle"
                :key="block.id"
                :speed="block.speed(coefFallingSpeed)"
                :x="block.x"
                :id="'block-'+block.id"
                :src="block.src"
                :opacity="block.opacity"
                :width="block.width(minSize, maxSize, maxDistance)"
                :height="block.height"
        ></Block>
    </div>
</template>

<script>
    import {bus} from '../bus'
    import Block from './Block'
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "Blocks",
        data() {
            return {
                blocks: [],
                generationInterval: null,
            }
        },
        computed: {
            ...mapState([
                'minSize',
                'maxSize',
                'maxDistance',
                'coefFallingSpeed',
                'quantity',
                'opacity',
                'generationSpeed',
                'templateSelects'
            ]),
            ...mapGetters([
                'getCustomSelects'
            ]),
            backgrounds() {
                return [...this.templateSelects, ...this.getCustomSelects]
            }
        },
        mounted() {
            bus.$on("change-generation-speed", () => {
                clearInterval(this.generationInterval);
                this.setNewGenerationInterval();
            });

            this.setNewGenerationInterval();

            setInterval(this.removeBlocks, 100);
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
                    src: this.getSrc(this.backgrounds),
                    opacity: this.opacity,
                    width(minSize, maxSize, maxDistance) {
                        let result = Math.abs(this.distance - maxDistance) * ((maxSize - minSize) / maxDistance) + minSize;
                        this.height = result;
                        return Number(result);
                    },
                    height: 0,
                    distance: Math.random() * this.maxDistance
                });
            },
            removeBlocks() {
                this.blocks.forEach((block, index) => {
                    let domBlock = document.getElementById("block-" + block.id);
                    let limit = document.documentElement.clientHeight + Math.max(domBlock.getAttribute("height"), domBlock.getAttribute("width")) + 100;

                    if (domBlock === undefined) return;
                    if (domBlock.getBoundingClientRect().y > limit) {
                        this.blocks.splice(index, 1);
                    }
                });
            },
            getSrc(ary) {
                return ary.length ? ary[Math.round(Math.random() * (ary.length - 1))] : ""
            },
            setNewGenerationInterval() {
                this.generationInterval = setInterval(() => {
                    for (let i = 0; i < this.quantity; i++) {
                        this.addBlock();
                    }
                }, this.generationSpeed);
            }
        },
        components: {
            Block
        }
    }
</script>

<style scoped>

</style>