<template>
  <div class="between:flex bottom:margin-3">
  </div>
  <div class="end:flex">
    <!--
        # {{ }} - "moustache" template binding #
        Embed the two functions that check if filtration is occurring and use them to conditionally render either the filtered entries' length or the entries length
    -->
    <div class="count-label">Results: {{ this.isFilteringByCity() || this.isFilteringByType() ? filteredEntries.length : entries.length }}</div>
    <!--
          # "v-model" #
          In the input element below, the "v-model" directive is used for two-way data binding between the input's value and searchInputValue.
          This means that whenever the value in the input field changes, the searchInputValue value will also change and the value of the input field will be set to that
          of the searchInputValue.
          # @change #
          @ is used as a shortcut for "v-on" used to define the onChange directive's function which handles the change event of the input field.
      -->
    <input type="search" class="input px:width-25" placeholder="Search here..." v-model="searchInputValue" @change="onSearchInputChange">
  </div>
  <!--
      Below, for the table base, use the "v-bind" shorthand ":propertyName" to bind/pass the value of the "columns" and "entries" to the
      table base (child) component.
  -->
  <TableBase2 :columns="columns" :entries="this.isFilteringByCity() || this.isFilteringByType()  ? filteredEntries : entries"/>
</template>

<script>
// (Child) Component imports
import TableBase2 from "../components/table/TableBase2";

export default {
  // Component name
  name: "WeatherForecastTable",
  // Component instance data
  data() {
    return {
      columns: [
        {name: 'id', text: 'ID'},
        {name: 'from', text: 'From'},
        {name: 'to', text: 'To'},
        {name: 'type', text: 'Type'},
        {name: 'unit', text: 'Unit'},
        {name: 'time', text: 'Time'},
        {name: 'place', text: 'Place'}
      ],
      entries: [],
      currentEntries: 10,
      filteredEntries: [],
      searchInputValue: ''
    }
  },
  // (Child) Component imports
  components: {
    TableBase2
  },
  /*
    Called synchronously after the instance is created. At this stage, the instance has finished processing the options
    which means the following have been set up: data observation, computed properties, methods, watch/event callbacks.
    However, the mounting phase has not been started, and the $el property will not be available yet.
  */
  created() {
    let id = 0;
    this.getAllForecastData().then(response => {
      console.log(response)
      this.entries = response.map(element => ({
        id: id++,
        from: element.from,
        to: element.to,
        type: element.type,
        unit: element.unit,
        time: element.time,
        place: element.place
      }));
    });
  },
  // Component methods
  methods: {
    // Method used to get all the forecast data from the weather data API.
    async getAllForecastData() {
      const response = await fetch('http://localhost:5050/forecast');
      return response.json();
    },
    // Method used to check if the filtering (the value of the "searchInputValue" field) is that of a city.
    isFilteringByCity() {
      return ['Aarhus', 'Horsens', 'Copenhagen'].includes(this.searchInputValue);
    },
    // Method used to check if the filtering (the value of the "searchInputValue" field) is that of a weather data type.
    isFilteringByType() {
      return ['temperature', 'precipitation', 'wind speed', 'cloud coverage'].includes(this.searchInputValue);
    },
    // Change event handle method for the "searchInputValue".
    onSearchInputChange() {
      if (this.isFilteringByCity()) {
        this.filteredEntries = this.entries.filter(element => element.place === this.searchInputValue);
      } else if (this.isFilteringByType()) {
        this.filteredEntries = this.entries.filter(element => element.type === this.searchInputValue);
      }
    },
  }
}
</script>

<style scoped>
.count-label {
  margin-top: 6px;
  margin-right: 10px;
}
</style>