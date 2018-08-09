<template>
 <div id="app">
   <router-view/>
   <label for="newtd">add a todo</label>
   <input type="text" id="newtd" @keyup.enter="addNewTodo" v-model="newToDoText">
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      {{todo}}
      <button type="button" @click="deleteTodo(index)">delete</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      todos: [
         'shopping',
         'coding'
      ],
    }
  },
  methods: {
    addNewTodo() {
      this.todos.push(this.newToDoText);
      this.newToDoText=''
    },
    deleteTodo(index) {
      this.todos.splice(index,1);
    }
  }
}
</script>

<style scoped>
.finished{
  text-decoration:underline;
}
</style>

