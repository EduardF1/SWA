import axios from 'axios';


const state = {
    historyitems: [],
    forecastitems: []
};

const getters = {
    allHistoryData: state => {
        return state.historyitems
    },
    allForecastData: state => {
        return state.forecastitems
    }
};

const actions = {
    async fetchHistoryItems({ commit }) {
        const response = await axios.get(' http://localhost:9090/data');
        commit('setHistoryItems', response.data);
    },

    async fetchForecastItems({ commit }) {
        const response = await axios.get(' http://localhost:9090/forecast');
        commit('setForecastItems', response.data);
    },

    async filterCity({ commit }, city) {
        const responseHistorical = await axios.get(`http://localhost:9090/data/${city}`);
        commit('setHistoryItems', responseHistorical.data);
        const responseForecast = await axios.get(`http://localhost:9090/forecast/${city}`)
        commit('setForecastItems', responseForecast.data);
    },

    async filterTimeHistorical({ commit }, {city, time}) {
        const responseHistorical = await axios.get(`http://localhost:9090/data/${city}`);
        commit('setHistoryItems', responseHistorical.data);
        const date2 = new Date();
        date2.setDate(date2.getDate() - time);
        commit('filterHistoryTime', date2);
    },

    async filterTimeForecast({ commit }, {city, time}) {
        const responseForecast = await axios.get(`http://localhost:9090/forecast/${city}`)
        commit('setForecastItems', responseForecast.data);
        const date2 = new Date();
        date2.setDate(date2.getDate() + time);
        commit('filterForecastTime', date2);
    },

    async addDataObject({commit},obj){
        var params = new URLSearchParams();
        params.append('type', obj.type)
        params.append('unit', obj.unit)
        params.append('value', obj.value)
        params.append('time', obj.time)
        params.append('place', obj.place)
        if(obj.type == "precipitation")
        {
            params.append('precipitation_type', obj.precipitation_type);
        }
        else if(obj.type == "wind speed")
        {
            params.append('direction', obj.direction);
        }
        else
        {
            console.log(obj);
        }
        const response = await axios.post(`http://localhost:9090/data`,params);
        commit('addItems', response.data);
    }
};



const mutations = {
    setHistoryItems: (state, historyitems) => state.historyitems = historyitems,
    setForecastItems: (state, forecastitems) => state.forecastitems = forecastitems,
    filterHistoryTime: (state, date) => state.historyitems = state.historyitems.filter(item => { return new Date(item.time).getUTCDate() <= date.getUTCDate() }),
    filterForecastTime: (state, date) => state.forecastitems = state.forecastitems.filter(item => { return new Date(item.time).getUTCDate() == date.getUTCDate() }),
    addItems:(state,obj) => state.historyitems.unshift(obj)

};

export default {
    state,
    getters,
    actions,
    mutations
};