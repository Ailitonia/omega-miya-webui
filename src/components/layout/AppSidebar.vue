<template>
  <el-menu
    :collapse="isCollapsed"
    class="el-menu-vertical"
    default-active="overview"
    @close="handleClose"
    @open="handleOpen"
  >
    <el-sub-menu index="dashboard">
      <template #title>
        <el-icon>
          <Odometer />
        </el-icon>
        <span>仪表盘</span>
      </template>
      <el-menu-item index="overview">总览</el-menu-item>
      <el-menu-item index="global-config">全局配置</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="bot">
      <template #title>
        <el-icon>
          <Operation />
        </el-icon>
        <span>Bot 管理</span>
      </template>
      <el-menu-item-group title="状态">
        <el-menu-item index="bot-overview">Bot 总览</el-menu-item>
        <el-menu-item index="bot-instances">Bot 状态</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="配置配置">
        <el-menu-item index="bot-config">Bot 配置管理</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="entity">
      <template #title>
        <el-icon>
          <Operation />
        </el-icon>
        <span>Entity 管理</span>
      </template>
      <el-menu-item-group title="状态">
        <el-menu-item index="entity-overview">Entity 总览</el-menu-item>
        <el-menu-item index="entity-instances">Entity 状态</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="配置">
        <el-menu-item index="entity-auth">权限配置</el-menu-item>
        <el-menu-item index="entity-subscription">订阅配置</el-menu-item>
        <el-menu-item index="entity-config">配置管理</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="plugins">
      <template #title>
        <el-icon>
          <Operation />
        </el-icon>
        <span>插件管理</span>
      </template>
      <el-menu-item index="plugin-list">插件总览</el-menu-item>
      <el-menu-item index="plugin-config">插件配置</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Odometer, Operation } from '@element-plus/icons-vue'

const isCollapsed = ref(false)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log('打开菜单:', key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log('关闭菜单:', key, keyPath)
}
</script>

<style scoped>
.el-menu-vertical {
  height: 100%;
}
</style>
