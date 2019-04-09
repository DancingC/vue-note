<template v-if="no">
  <div class="note" id="note">
    <el-form label="180px">
      <div class="input">
        <el-input v-model="newTodoText" class="new-todo" placeholder="请输入"></el-input>
        <el-button @click="addNewTodo">添加</el-button>
      </div>
    </el-form>

    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo._id"
        v-bind:title="todo.name"
        v-bind:id="todo._id"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  components: {
    TodoItem
  },
  data () {
    return {
      newTodoText: '',
      todos: [],
      nextTodoId: 1
    }
  },
  mounted () {
    var _this = this
    axios.get('http://localhost:3000/getData').then(function (response) {
      _this.todos = response.data;
    })
  },
  watch: {
    todos: function () {
      this.$nextTick(function () {
        // console.log(233)
      })
    }
  },
  methods: {
    addNewTodo: function () {
      if (this.newTodoText === '') {
        this.$message({
          message: '请输入待办事项哦！',
          type: 'warning'
        })
      } else {
        this.todos.push({
          id: this.nextTodoId++,
          name: this.newTodoText
        })
        // this.newTodoText = ""

        var value = this.newTodoText
        axios({
          method: 'post',
          url: 'http://localhost:3000/insert',
          data: {
            name: value
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note .input{
  display: flex;
  justify-content: space-between;
}
.note .input .new-todo{
  width: 85%;
}
.note{
  width: 45%;
  margin: 0 auto;
}
.note ul{
  margin-top: 20px;
  padding: 0;
}
.note ul li {
  padding: 5px;
  border: 1px solid #ddd;
  margin-bottom: -1px;
}
.note .el-input {
  width: 180px;
}
</style>
