<template>
    <div>
        <v-text-field
                v-model="link"
                type="text"
                prepend-icon="file_copy"
                @click:prepend="copiedLink"
        ></v-text-field>
        <v-btn block round color="info" @click="generateLink">Сгенерировать ссылку</v-btn>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    import {bus} from '../bus'

    export default {
        name: "LinkGenerator",
        data() {
            return {
                link: "",
                snackbar:false
            }
        },
        computed: {
            ...mapState([
                'opacity',
                'generationSpeed',
                'minSize',
                'maxSize',
                'maxDistance',
                'quantity',
                'coefFallingSpeed'
            ]),
            ...mapGetters(['getStrTemplateSelects', 'getStrCustomSelects'])
        },
        methods: {
            generateLink() {
                this.link+="http://falling-images.surge.sh/?";
                this.link+="templateSelects="+this.getStrTemplateSelects+"&";
                this.link+="customSelects="+this.getStrCustomSelects+"&";
                this.link+="opacity="+this.opacity+"&";
                this.link+="generationSpeed="+this.generationSpeed+"&";
                this.link+="minSize="+this.minSize+"&";
                this.link+="maxSize="+this.maxSize+"&";
                this.link+="maxDistance="+this.maxDistance+"&";
                this.link+="quantity="+this.quantity+"&";
                this.link+="coefFallingSpeed="+this.coefFallingSpeed;
            },
            copiedLink(){
                navigator.clipboard.writeText(this.link)
                    .then(() => {
                        bus.$emit("show-snack","Ссылка скопирована!");
                    })
                    .catch(err => {
                        console.log('Ошибка записи ссылки в буфер обмена: ', err);
                    });
            }
        }
    }
</script>

<style scoped>

</style>