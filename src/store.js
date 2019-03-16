import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        templateSelects: [],
        customSelects: [],
        opacity: 0.8,
        generationSpeed: 1000,
        minSize: 50,
        maxSize: 300,
        maxDistance: 100,
        quantity: 1,
        coefFallingSpeed: 0
    },
    mutations: {
        setSize(state, size) {
            state.minSize = Number(size.min);
            state.maxSize = Number(size.max);
        },
        setDistance(state, distance) {
            state.maxDistance = Number(distance.max);
        },
        setFallingSpeed(state, speed) {
            state.coefFallingSpeed = Number(speed);
        },
        setQuantity(state, quantity) {
            state.quantity = Number(quantity);
        },
        setOpacity(state, opacity) {
            state.opacity = Number(opacity);
        },
        setGenerationSpeed(state, speed) {
            state.generationSpeed = Number(speed);
        },
        setCustomSelects(state, ary) {
            state.customSelects = ary;
        },
        setTemplateSelects(state, ary) {
            state.templateSelects = ary;
        },
        setAllState(state, obj){
            Object.assign(state, obj);
        },
        addCustomSelect(state, obj) {
            state.customSelects.push(obj);
        },
        updateCustomSelect(state, payload) {
            state.customSelects[payload.index][payload.prop] = payload.context;
        },
        removeCustomSelect(state, index) {
            state.customSelects.splice(index, 1);
        }
    },
    getters: {
        getCustomSelects(state) {
            let trueSelects = [];

            state.customSelects.forEach((select) => {
                if (!select.visible) return;

                trueSelects.push(select.text);
            });

            return trueSelects;
        },
        getStrTemplateSelects(state){
            return state.templateSelects.join(',');
        },
        getStrCustomSelects(state){
            let strArray=[];

            if(state.customSelects.length === 0) return 0;

            state.customSelects.forEach((item)=>{
                strArray.push(String(item.text));
                strArray.push(String(item.visible));
            });
            
            return strArray.join(',');
        }
    },
    actions: {}
})
