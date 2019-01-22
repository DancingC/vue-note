<template v-if="no">
  <div class="note" id="note">
    <form v-on:submit.prevent="addNewTodo">
      <label class="el-form-item__label" for="new-todo">新增待办事项：</label>
      <div class="el-input">
      <input v-model="newTodoText" id="new-todo" placeholder="请输入">
      </div>
      <button>添加</button>
    </form>
    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
        class="el-dropdown-menu__item"
      ></li>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

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
  watch: {
    todos: function () {
      this.$nextTick(function () {
        console.log(233)
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
          title: this.newTodoText
        })
        this.newTodoText = ''
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

.note ul{
  width: 400px;
}
.note ul li{
  padding: 5px;
  border: 1px solid #ddd;
  margin-bottom: -1px;
}
.note .el-input{
  width: 180px;
}
.note input{
  -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
button{
  display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #409eff;
    border: 1px solid #409eff;
    border-color: #409eff;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
</style>
