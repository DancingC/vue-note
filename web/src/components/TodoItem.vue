<template>
<div>
    <el-card shadow="hover" @mouseover="showBtn" @mouseout="liveLi">
      <el-checkbox label='' v-model="checked" name="type" id="checked">{{ title }}</el-checkbox>
      <el-button type="danger" icon="el-icon-delete" class="icon-btn transition-box" v-show="show" circle v-on:click="removeList('remove')"></el-button>
      <el-button type="text" icon="el-icon-delete" class="icon-btn transition-box" v-show="show" circle v-on:click="change(value)"></el-button>
    </el-card>
  
    <el-dialog :visible.sync="dialogVisible" width="30%" center :show-close="false">
      <el-form ref="form" :model="changeForm" label-width="80px">
        <el-form-item label="事项名称">
          <el-input v-model="changeForm.text"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeOk">确 定</el-button>
      </span>
    </el-dialog>
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
      delId: this.id,
      dialogVisible:false,
      changeForm:{
        text:''
      }
    }
  },
  watch: {
    checked: function () {
      this.$nextTick(function () {
        if (this.checked === true) {
          this.$el.childNodes[0].childNodes[1].classList.add('line')
        } else {
          this.$el.childNodes[0].childNodes[1].classList.remove('line')
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
          id: this.delId
        }
      })
      this.$emit('remove')
    },
    change(val){
      this.dialogVisible = true;
      this.changeForm.text = this.title;
    },
    changeOk(){
      this.title = this.changeForm.text;
      axios.put('http://localhost:3000/change',{
          id: this.id,
          name: this.changeForm.text
      })
      this.dialogVisible = false;
    }
  }
}
</script>

<style>
.icon-btn{
    float: right;
    padding: 8px !important;
    /* display: none; */
}
.line{
  text-decoration:line-through;
  color:#ddd !important;
}
</style>
