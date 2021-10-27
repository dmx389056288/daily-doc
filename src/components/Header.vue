<template>
  <div class="head df-sb">
    <div>
      <span>首页</span>
      <span>首页</span>
    </div>
    <div>
      <span>github</span>
      <span>github</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'head',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.head{
  background-color: blue;
}
</style>
