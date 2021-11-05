import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WeatherHistoryTable from "../views/WeatherHistoryTable";
import WeatherForecastTable from "../views/WeatherForecastTable";
import AddWeatherDataForm from "../views/AddWeatherDataForm";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/weatherHistory',
    name: 'WeatherHistoryTable',
    component: WeatherHistoryTable
  },
  {
    path: '/weatherForecast',
    name: 'WeatherForecastTable',
    component: WeatherForecastTable
  },
  {
    path: '/addWeatherData',
    name: 'AddWeatherData',
    component: AddWeatherDataForm
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
