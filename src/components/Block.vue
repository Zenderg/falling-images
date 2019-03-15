<template>
    <div :style="`transform:translate(${x}px, ${y}px) rotate(${angle}deg); transition: ${speed}s; background-image:url('${src}'); width:${width}px; height:${height}px; opacity:${opacity}`"
         class="block">

    </div>
</template>

<script>
    export default {
        name: "Block",
        data() {
            return {
                y: -Math.max(this.height, this.width)-100
            }
        },
        props: {
            speed: Number,
            x: Number,
            angle: Number,
            src: String,
            width: Number,
            height: Number,
            opacity: Number
        },
        mounted() {
            setTimeout(() => {
                this.y = document.documentElement.clientHeight + Math.max(this.height, this.width) + 200;
            }, 300);
        }
    }
</script>

<style scoped>
    .block {
        top: 0;
        left: 0;
        position: absolute;
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 1;
    }
</style>