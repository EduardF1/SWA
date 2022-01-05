import {createRouter, createWebHashHistory} from 'vue-router'
import WeatherHistoryTable from "../views/WeatherHistoryTable";
import WeatherForecastTable from "../views/WeatherForecastTable";
import AddWeatherDataForm from "../views/AddWeatherDataForm";

/**
 * Application router, the path provides the identifier through which the request component is loaded/mounted.
 * @type {[
 *          { path: string,
 *              component: {
 *                components: {
 *                  TableBase: {
 *                    computed: {
 *                      tableData(): *,
 *                      tableHeader(): *
 *                    },
 *                    name: string,
 *                    props: {entries: Array | ArrayConstructor, columns: Array | ArrayConstructor, label: String | StringConstructor}
 *                  }
 *                },
 *                data(): {filteredEntries: [], entries: [], columns, currentEntries: number, searchInputValue: string},
 *                created(): void,
 *                methods: {
 *                  isFilteringByType(): boolean,
 *                  onSearchInputChange(): void,
 *                  getAllWeatherData(): Promise<any>,
 *                  isFilteringByCity(): boolean
 *                },
 *                name: string
 *              },
 *              name: string
 *          },
 *          { path: string,
 *              component: {
 *                components: {
 *                  TableBase2: {
 *                    computed: {
 *                      tableData(): *,
 *                      tableHeader(): *
 *                    },
 *                    name: string,
 *                    props: {entries: Array | ArrayConstructor, columns: Array | ArrayConstructor}}
 *                  },
 *                data(): {filteredEntries: [], entries: [], columns, currentEntries: number, searchInputValue: string},
 *                created(): void,
 *                methods: {
 *                  isFilteringByType(): boolean,
 *                  onSearchInputChange(): void,
 *                  isFilteringByCity(): boolean,
 *                  getAllForecastData(): Promise<any>
 *                },
 *                name: string
 *              },
 *              name: string
 *           },
 *           {  path: string,
 *                component: {
 *                  data(): {
 *                    form: {
 *                      unit: string,
 *                      precipitation_type: string,
 *                      time: string,
 *                      place: string,
 *                      type: string,
 *                      value: string,
 *                      direction: string
 *                   }
 *                },
 *                methods: {
 *                  submitForm(): void
 *                },
 *                name: string
 *                },
 *               name: string
 *            }
 *          ]}
 */
const routes = [
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