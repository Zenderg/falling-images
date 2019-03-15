<template>
    <v-icon @click.stop="showSidebar" class="settings-icon">settings</v-icon>
</template>

<script>
    import {bus} from '../bus'

    export default {
        name: "SettingsIcon",
        methods: {
            showSidebar() {
                bus.$emit("showSidebar");
            }
        }
    }
</script>

<style scoped>
    .settings-icon {
        position: absolute;
        top: 50px;
        left: 50px;
        cursor: pointer;
        transform: rotate(0deg);
        animation: rotate-cog 3s infinite linear paused;
        z-index: 2;
    }

    .settings-icon:hover {
        animation-play-state: running;
    }

    @keyframes rotate-cog {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>