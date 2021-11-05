<template>
  <div class="between:flex bottom:margin-3">
  </div>
  <div class="end:flex">
    <div class="count-label">Results: {{ this.isFilteringByCity() || this.isFilteringByType() ? filteredEntries.length : entries.length }}</div>
    <input type="search" class="input px:width-25" placeholder="Search here..." v-model="searchInputValue"
           @change="onSearchInputChange">
  </div>
  <TableBase2 :columns="columns" :entries="this.isFilteringByCity() || this.isFilteringByType()  ? filteredEntries : entries"/>
</template>

<script>
import TableBase2 from "../components/table/TableBase2";

export default {
  name: "WeatherForecastTable",
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
      searchInputValue: '',
      searchEntries: []
    }
  },
  components: {
    TableBase2
  },
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
  methods: {
    async getAllForecastData() {
      const response = await fetch('http://localhost:9090/forecast');
      return response.json();
    },
    isFilteringByCity() {
      return ['Aarhus', 'Horsens', 'Copenhagen'].includes(this.searchInputValue);
    },
    isFilteringByType() {
      return ['temperature', 'precipitation', 'wind speed', 'cloud coverage'].includes(this.searchInputValue);
    },
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