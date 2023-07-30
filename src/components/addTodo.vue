<template>
  <div>
    <div class="title">Todo List</div>
    <div class="addTodoContainer">
      <input @keydown.enter="addTodo" v-model="todo" type="text" />
      <button @click="addTodo">Add Todo</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { todoStore } from "../store/todo.store";

const todos = todoStore();
const todo = ref("");

const addTodo = () => {
  if (todo.value.trim() != "")
    todos.addTodo({
      id: Date.now(),
      todo: todo.value,
    });
  todo.value = "";
  localStorage.setItem("todos", JSON.stringify(todos.GET_TODOS));
};
</script>

<style scoped>
.title {
  color: royalblue;
  font-size: 32px;
  font-weight: 700;
  width: fit-content;
  padding: 0 10px;
  border-bottom: 1px solid black;
  margin: 10px auto;
}

.addTodoContainer {
  width: 50vw;
  height: 32px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}

input {
  width: 25vw;
  font-size: 18px;
  text-align: center;
  border: solid royalblue;
  border-radius: 5px;
}

input:focus {
  outline: none;
}

button {
  border: none;
  background-color: royalblue;
  color: #fff;
  border-radius: 5px;
  padding: 0 15px;
}

button:hover {
  background-color: #fff;
  color: royalblue;
  cursor: pointer;
}
</style>
