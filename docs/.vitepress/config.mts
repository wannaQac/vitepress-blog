import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/vitepress-blog/", // git page 会用到
  //base:"/",  // vercel 会用到
  title: "catalpa blog",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },  // docs/index.md
      { text: 'Examples', link: '/markdown-examples' },
      { text: '代码', items: [ { text: '数据结构与算法', link: '/code/datastruct/'}, {text: 'Vue3前端框架', link: '/code/vue3/'}, { text: '数据库', link: '/code/database/'} ]}, //表示docs/code/datastruct/index.md
      { text: '基建', items: [ { text: '环境搭建', link: '/code/basic/'} ]}
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
      '/code/database/': [
        {
          items: [
            { text: '引言', link: '/code/database/' },
          ],
        },
        {
          text: 'DuckDB',
          items: [
            { text: 'DuckDB配置', link: '/code/database/duckdb' },
          ]
        }
      ],
      '/code/basic/': [
        {
          text: '基础建设',
          items: [
            { text: '引言', link: '/code/basic/' },
            { text: 'Nvm', link: '/code/basic/nodejs' },
            { text: 'PHP', link: '/code/basic/php' },
            { text: 'Ubuntu', link: '/code/basic/ubuntu' },
            { text: 'Multipass', link: '/code/basic/multipass' }
          ]
        }
      ],

    },

    outline: {
      level: [2, 6],
      label: '目录'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
