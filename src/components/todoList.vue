<template>
  <div>
    <div
      class="listTodos"
      v-for="(data, index) in todos.allTodo"
      :key="index"
    >
      <div class="todo">
        {{ data.todo }} <button @click="deleteTodo(index)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { todoStore } from "../store/todo.store";

const todos = todoStore();

const deleteTodo = (index) => {
  todos.deleteTodo(index);
  localStorage.setItem("todos", JSON.stringify(todos.allTodo));
};

const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos.allTodo = JSON.parse(storedTodos);
  }
};

onMounted(() => {
  loadTodosFromLocalStorage();
});
</script>

<style scoped>
button {
  border: none;
  background-color: royalblue;
  color: #fff;
  border-radius: 5px;
}

button:hover {
  background-color: #fff;
  color: royalblue;
  cursor: pointer;
}
</style>
