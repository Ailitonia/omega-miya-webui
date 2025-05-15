import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/bot',
    name: 'Bot',
    meta: { title: 'Bot管理' },
    children: [
      { path: 'instances', name: 'BotInstances', meta: { title: '实例列表' } },
      { path: 'config', name: 'BotConfig', meta: { title: '配置管理' } },
    ],
  },
  {
    path: '/session',
    name: 'Session',
    meta: { title: '会话管理' },
    children: [
      { path: 'active', name: 'ActiveSessions', meta: { title: '活跃会话' } },
      { path: 'logs', name: 'SessionLogs', meta: { title: '日志查看' } },
    ],
  },
  {
    path: '/plugins',
    name: 'Plugins',
    meta: { title: '插件管理' },
    children: [
      { path: 'list', name: 'PluginList', meta: { title: '插件仓库' } },
      { path: 'dependencies', name: 'PluginDeps', meta: { title: '依赖关系' } },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
