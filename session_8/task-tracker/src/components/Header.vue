<template>
  <header>
    <h1>{{title}}</h1>
    <Button
        v-show="homePage"
        @btn-click="$emit('toggle-add-task')"
        :color="showAddTask ? 'red' : 'green'"
        :text="showAddTask ? 'Close' : 'Add Task'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean
  },
    components: {
      Button
    },
  computed: {
    homePage() {
      return this.$route.path === '/';
    }
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>