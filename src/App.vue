<template>
  <v-app class="main">
    <SettingsIcon></SettingsIcon>
    <Sidebar></Sidebar>
    <Blocks></Blocks>
  </v-app>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import SettingsIcon from './components/SettingsIcon'
  import Blocks from './components/Blocks'

  export default {
    name: "App",
    data() {
      return {

      }
    },
    components: {
      Sidebar,
      SettingsIcon,
      Blocks
    }
  }
</script>

<style scoped>

</style>