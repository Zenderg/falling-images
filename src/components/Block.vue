<template>
    <div :style="`transform:translate(${x}px, ${y}px) rotate(${angle}deg); transition: ${speed}s; background-image:url('${src}'); width:${width}px; height:${height}px; opacity:${opacity}`" class="block">

    </div>
</template>

<script>
    export default {
        name: "Block",
        data(){
            return{
                y:-500
            }
        },
        props:{
            speed:Number,
            x:Number,
            angle:Number,
            src:String,
            width:Number,
            height:Number,
            opacity:Number
        },
        mounted(){
            setTimeout(()=>{
                this.y=document.documentElement.clientHeight+700;
            }, 100);
        }
    }
</script>

<style scoped>
    .block{
        top:0;
        left:0;
        /*background-color: #ff753b;*/
        position: absolute;
        opacity: 0.8;
        background-image: url('/src/assets/js.webp');
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 1;
    }
</style>