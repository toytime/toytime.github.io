import { basename } from 'node:path';
import { defineConfig } from 'vitepress';
import MarkdownPreview from 'vite-plugin-markdown-preview';

import { head, nav, sidebar } from './configs';

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '');

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/` : '/',

  lang: 'zh-CN',
  title: '茂茂物语',
  description: '茂茂的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996/vitepress-nav-template' }],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present maomao',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'maomao1996.vitepress-nav-template',
    },

    comment: {
      repo: 'maomao1996/vitepress-nav-template',
      repoId: 'R_kgDOJC09Jg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJC09Js4Cekn0',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
    css: {
      // 禁用 CSS 模块
      modules: false,
      // 禁用 PostCSS
      postcss: false,
      // 禁用预处理器
      preprocessorOptions: {
        scss: false,
        less: false,
        stylus: false
      },
      // 不进行 CSS 压缩
      minify: false 
    },
    esbuild: {
      // 移除错误的 jsxFactory 和 jsxFragment 设置
      minify: false 
    },
    optimizeDeps: {
      // 不进行依赖预构建
      disabled: true 
    },
    build: {
      // 不进行代码分割
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      },
      // 不进行 JS 压缩
      minify: false 
    }
  }
});    
