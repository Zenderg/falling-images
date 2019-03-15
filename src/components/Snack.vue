<template>
    <v-snackbar
            v-model="snack"
            bottom
            :timeout="2000"
    >{{ text }}
    </v-snackbar>
</template>

<script>
    import {bus} from '../bus'

    export default {
        name: "Snack",
        data() {
            return {
                text: "",
                snack: false
            }
        },
        mounted() {
            bus.$on("show-snack", (text) => {
                this.snack = true;
                this.text = text
            });
        }
    }
</script>

<style scoped>

</style>