<template>
  <li @mouseover="showBtn" @mouseout="liveLi">
      <el-checkbox label='' v-model="checked" name="type" id="checked">{{ title }}</el-checkbox>
      <el-button type="danger" icon="el-icon-delete" class="icon-btn transition-box" v-show="show" circle v-on:click="$emit('remove')"></el-button>
    </li>
</template>

<script>

export default {
  name: 'TodoItem',
  props: ['title'],
  data () {
    return {
      checked: false,
      show: false
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
