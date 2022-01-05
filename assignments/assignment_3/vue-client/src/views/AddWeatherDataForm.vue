
<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <h3>Add historical data</h3>
      <hr />
      <div class="form-group">
        <label for="type">Type</label>
        <input
            type="text"
            placeholder="Required"
            id="type"
            class="form-control"
            v-model="form.type"
        />
      </div>
      <div class="form-group">
        <label for="time">Time</label>
        <input
            type="text"
            placeholder="UTC format"
            id="time"
            class="form-control"
            v-model="form.time"
        />
      </div>
      <div class="form-group">
        <label for="place">Place</label>
        <input
            type="text"
            placeholder="Required"
            id="place"
            class="form-control"
            v-model="form.place"
        />
      </div>
      <div class="form-group">
        <label for="value">Value</label>
        <input
            type="text"
            placeholder="Required"
            id="value"
            class="form-control"
            v-model="form.value"
        />
      </div>
      <div class="form-group">
        <label for="unit">Unit</label>
        <input
            type="text"
            placeholder="Required"
            id="unit"
            class="form-control"
            v-model="form.unit"
        />
      </div>

      <div class="form-group">
        <label for="precipitationType">Precitation Type</label>
        <input
            type="text"
            placeholder="only for precipitation"
            id="precipitationType"
            class="form-control"
            v-model="form.precitation_type"
        />
      </div>

      <div class="form-group">
        <label for="direction">Direction</label>
        <input
            type="text"
            placeholder="Only for wind"
            id="direction"
            class="form-control"
            v-model="form.direction"
        />
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: "AddWeatherDataForm",
  data(){
    return {
      form: {
        type: "",
        time: "",
        place: "",
        value: "",
        unit: "",
        precipitation_type: "",
        direction: "",
      }
    }
  },
  methods:{
    submitForm(){
      axios.post('http://localhost:5050/data', this.form)
          .then((res) => {
            console.log('Added: ', this.form)
          })
          .catch((error) => {
            // error.response.status Check status code
          }).finally(() => {
        //Perform action in always
      });
    }
  }
}
</script>

<style scoped/>