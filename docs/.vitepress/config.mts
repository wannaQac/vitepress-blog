import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base:"/vitepress-blog/", // git page 会用到
  base:"/",  // vercel 会用到
  title: "catalpa blog",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },  // docs/index.md
      { text: 'Examples', link: '/markdown-examples' },
      { text: '代码', items: [ { text: '数据结构与算法', link: '/code/datastruct/'}, {text: 'Vue3前端框架', link: '/code/vue3/'}]} //表示docs/code/datastruct/index.md
    ],

    sidebar: {
      '/code/datastruct/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/code/datastruct/' },
            { text: 'One', link: '/code/datastruct/' },
            { text: 'Two', link: '/code/vue3/' }
          ]
        }
      ],

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
