<template>
  <div class="container">
    <table class="table table:border secondary-5:border">
      <thead>
        <tr>
          <!-- Iterate over the table header array and create the table header row with the cells (containing each "th" entry's properties).-->
          <th v-for="th in tableHeader" :key="th">
            <div class="between: flex center:items">
              <span>{{th.text}}</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter none:event" viewBox="0 0 16 16">
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- Iterate over the table data array and create the table rows with their cells (containing each "td" entry's properties).-->
        <tr v-for="td in tableData" :key="td">
          <td>{{td.id}}</td>
          <td>{{td.value}}</td>
          <td>{{td.type}}</td>
          <td>{{td.unit}}</td>
          <td>{{td.time}}</td>
          <td>{{td.place}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  // Component name
  name: "TableBase",
  // Definition of component instance properties and their types.
  props: {
    columns: Array,
    entries: Array,
    label: String
  },
  /*
      Computed properties (received props): "this.columns" and "this.entries".
      Def.:
      A computed property is used to declaratively describe a value that depends on other values.
      When you data-bind to a computed property inside the template, Vue knows when to update the
      DOM when any of the values depended upon by the computed property has changed.
   */
  computed: {
    tableHeader() {
      return this.columns || [];
    },
    tableData() {
      return this.entries || [];
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>