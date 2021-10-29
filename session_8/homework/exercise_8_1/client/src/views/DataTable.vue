<template>
  <TableData :columns="columns" :entries="entries"/>
</template>

<script>
import TableData from "../components/table/TableData";

export default {
  name: "DataTable",
  data() {
    return {
      columns: [
        {name: 'id', text: 'ID'},
        {name: 'value', text: 'Value'},
        {name: 'type', text: 'Type'},
        {name: 'unit', text: 'Unit'},
        {name: 'time', text: 'Time'},
        {name: 'place', text: 'Place'}
      ],
      entries: []
    }
  },
  components: {
    TableData
  },
  created() {
    let id = 0;
    this.getAllWeatherData().then(response => {
      this.entries = response.map(element => ({
        id: id++,
        value: element.value,
        type: element.type,
        unit: element.unit,
        time: element.time,
        place: element.place
      }));
    });
  },
  methods: {
    async getAllWeatherData() {
      const response = await fetch('http://localhost:8080/data');
      return response.json();
    }
  }
}
</script>

<style scoped>

</style>