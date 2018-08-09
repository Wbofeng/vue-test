<template>
  <div>
    <el-card class="card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button class="button" type="text">操作按钮</el-button>
      </div>
    </el-card>
    <input type="text" placeholder="Add a todo" v-model="newToDoText" v-on:keyup.enter="addNewTodo">
    <ul>
      <li v-for="(todo,index) in todos" :key="index" v-bind:title="todo.title">
        <span>{{ todo.title }}</span>
        <button @click="remove(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.button {
  float: right;
  padding: 3px 0
}
.card {
  width: 50%
}
</style>


<script>
  export default {
    data() {
      return {
        todos: [
          { title: "one" },
          { title: "two" },
          { title: "three" }
        ],
        newToDoText: ''
      }
    },
    methods: {
      addNewTodo() {
        this.todos.push({
          title: this.newToDoText
        })
        this.newToDoText = ''
      },
      remove(index) {
        this.todos.splice(index, 1)
      }
    }
  }
</script>