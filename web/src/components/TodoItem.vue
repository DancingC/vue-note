<template>
<div>
    <li shadow="hover" @mouseover="showBtn" @mouseout="liveLi" class="liText">
      <el-checkbox v-model="checked" name="type" class="checked">{{ title }}</el-checkbox>
      <el-button type="danger" icon="el-icon-delete" class="icon-btn transition-box" v-show="show" circle v-on:click="removeList('remove')"></el-button>
    </li>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodoItem',
  props: ['title', 'id'],
  data () {
    return {
      checked: false,
      show: false,
      name: this.title,
      delId: this.id
    }
  },
  watch: {
    checked: function () {
      this.$nextTick(function () {
        if (this.checked === true) {
          this.$el.querySelector('.checked').lastChild.classList.add('line')
        } else {
          this.$el.querySelector('.checked').lastChild.classList.remove('line')
        }
      })
    }
  },
  methods: {
    showBtn: function () {
      this.show = true
    },
    liveLi: function () {
      this.show = false
    },
    removeList (remove) {
      axios({
        method: 'delete',
        url: 'http://localhost:3000/delete',
        data: {
          id: this.delId,
          name: this.name
        }
      })
      this.$emit('remove')
    }
  }
}
</script>

<style scoped>
.icon-btn{
    float: right;
    padding: 8px !important;
}
.line{
  text-decoration:line-through;
  color:#ddd !important;
}
.liText{
    border-top: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    padding: 10px 15px;
    margin-bottom: -1px;
    line-height: 36px;
}
</style>
