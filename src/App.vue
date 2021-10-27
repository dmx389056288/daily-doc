<template>
  <el-container>
      <el-header>
        <Header />
      </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Aside from './components/Aside.vue';
export default defineComponent({
  name: 'App',
  components: {
    Header,
    Aside
  }
});
</script>

<style>
#app {

}
</style>
