<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <input v-model.lazy="inputFieldText" type="text">
    {{ inputFieldText }}<br><br>

    <textarea v-model="textAreaInput" id="text-area"></textarea>
    <p>{{ textAreaInput }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Simple v-model study page",
      inputFieldText: 'Type in something.',
      textAreaInput: 'What are you thinking of ?'
    }
  }
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: #175dc5;
}

p {
  white-space: pre;
}
</style>


