<template v-if="no">
  <div class="note" id="note">
    <el-form label="180px">
      <el-form-item label="新增待办事项：">
        <el-input v-model="newTodoText" id="new-todo" placeholder="请输入"></el-input>
        <el-button @click="addNewTodo">添加</el-button>
      </el-form-item>
    </el-form>
    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.name"
        v-bind:id="todo.id"
        v-on:remove="todos.splice(index, 1)"
        class="el-dropdown-menu__item"
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
    axios.get('http://localhost:3000/about').then(function (response) {
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

        var abc = this.newTodoText
        axios({
          method: 'post',
          url: 'http://localhost:3000/add',
          data: {
            name: abc
          }
        })
        axios.get('http://localhost:3000/about').then(function (response) {
      console.log(response.data)
    })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.note ul {
  width: 400px;
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
