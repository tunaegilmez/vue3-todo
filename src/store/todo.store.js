import { defineStore } from 'pinia'

export const todoStore = defineStore({
  id: 'todo',
  state: () => ({
    allTodo: [
      {id: 1, todo: 'First Todo'}
    ]
  }),
  getters: {
    GET_TODOS: (state) => state.allTodo
  },
  actions: {
    addTodo (todo) {
        this.allTodo = [...this.allTodo, todo]
    },
    deleteTodo (index) {
        this.allTodo.splice(index, 1)
    }
  }
})
