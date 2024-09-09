import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.ts'
import { navbar } from './nav.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base:"/vitepress-blog/", // git page 会用到
  base:"/",  // vercel 会用到
  title: "catalpa blog",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,

    sidebar: sidebar,

    outline: {
      level: [2, 6],
      label: '目录'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
