import Vuex from "vuex";
import Vue from "vue";
import weatherdata from "./modules/weatherdata";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        weatherdata
    }
});