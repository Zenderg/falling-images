<template>
  <v-app class="main">
    <SettingsIcon></SettingsIcon>
    <Sidebar></Sidebar>
    <Blocks></Blocks>
    <Snack></Snack>
  </v-app>
</template>

<script>
  import Sidebar from '../components/Sidebar'
  import SettingsIcon from '../components/SettingsIcon'
  import Blocks from '../components/Blocks'
  import Snack from '../components/Snack'
  import {mapMutations} from 'vuex'

  export default {
    name: "Home",
    data() {
      return {
      }
    },
    mounted(){
      let params=this.$route.query;

      if(Object.entries(params).length === 0) return false;

      let obj={
        templateSelects: params.templateSelects.split(','),
        customSelects: this.createdCustomSelectsObject(params.customSelects),
        opacity: +params.opacity,
        generationSpeed: +params.generationSpeed,
        minSize: +params.minSize,
        maxSize: +params.maxSize,
        maxDistance: Number(params.maxDistance),
        quantity: +params.quantity,
        coefFallingSpeed: Number(params.coefFallingSpeed)
      };
      this.setAllState(obj)
    },
    methods:{
      ...mapMutations(['setAllState']),
      createdCustomSelectsObject(str){
        let objs=[];

        str.split(',').forEach((item, index, ary)=>{
          if(Number(ary[0]) === 0) return false;
          if(index%2 === 0) objs.push({text:ary[index], visible: Boolean(ary[index+1])})
        });

        return objs;
      }
    },
    components: {
      Sidebar,
      SettingsIcon,
      Blocks,
      Snack
    }
  }
</script>

<style scoped>
</style>
