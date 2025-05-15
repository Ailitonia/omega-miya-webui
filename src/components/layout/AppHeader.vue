<template>
  <el-header class="app-header">
    <div class="header-left">
      <el-icon name="menu"></el-icon>
      <span class="system-title">Omega-Miya WebUI</span>
    </div>
    <div class="header-right">
      <el-button icon="moon" @click="toggleTheme"></el-button>
    </div>
    <el-page-header :icon="ArrowLeft">
      <template #content>
        <span class="text-large font-600 mr-3"> Omega-Miya WebUI </span>
      </template>
    </el-page-header>
  </el-header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.body.classList.toggle('dark-mode', theme.value === 'dark')
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-left {
  display: flex;
  align-items: center;
}

.system-title {
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>
