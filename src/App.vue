<template>
  <div class="app">
    <addTodo />
    <todoList />
  </div>
</template>

<script setup>
import addTodo from './components/addTodo.vue';
import todoList from './components/todoList.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
