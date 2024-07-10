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
      { text: '框架', items: [ { text: 'Vue3', link: '/code/vue3/'}, {text: 'ThinkPHP', link: '/code/thinkphp/install'} ]  },
      { text: '编程', items: [ { text: 'JavaScript', link: '/code/lang/js/'}, { text: 'PHP', link: '/code/lang/php/'}, { text: '数据库', link: '/code/database/'}  ]  },
      { text: '算法', items: [ { text: '数据结构与算法', link: '/code/datastruct/'} ]}, //表示docs/code/datastruct/index.md
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
      '/code/thinkphp/': [
        {
          text: '介绍',
          items: [
            { text: '安装', link: '/code/thinkphp/install' },
          ]
        }
      ],
      '/code/vue3/': [
        {
          text: 'Vue3 开始',
          items: [
            { text: 'Vue3 新特性', link: '/code/vue3/' },
            { text: 'Vite Init', link: '/code/vue3/vite' },
            { text: 'Vue3 Init', link: '/code/vue3/vue3init' },
            { text: 'Vscode Plug', link: '/code/vue3/vscodeplug' },
          ]
        },
        {
          text: 'Vue3 语法',
          items: [
            { text: '模版语法', link: '/code/vue3/template' },
          ]
        },
      ],
      '/code/lang/php/': [
        {
          items: [
            { text: '引言', link: '/code/lang/php/' },
          ],
        },
        {
          text: '时间',
          items: [
            { text: '计算运行时间', link: '/code/lang/php/calcruntime' },
          ]
        },
        {
          text: '遇到的问题',
          items: [
            { text: 'Form表单项过多无法处理', link: '/code/lang/php/formitemtomuch' },
            { text: '上传文件大小限制', link: '/code/lang/php/uploadfilelimit' },
          ]
        }
      ],
      '/code/lang/js/': [
        {
          items: [
            { text: '引言', link: '/code/lang/js/' },
          ],
        },
        {
          text: 'Array',
          items: [
            { text: 'Instance methods', link: '/code/lang/js/arrayinstancemethod' },
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
            { text: 'DuckDB函数', link: '/code/database/duckdbfunction' },
            { text: 'MySQL适配DuckDB', link: '/code/database/mysqltoduckdb' },
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
            { text: 'Git', link: '/code/basic/git' },
            { text: 'Multipass', link: '/code/basic/multipass' }
          ]
        },
        {
          text: '服务器',
          items: [
            { text: 'bandwagonhost（搬瓦匠）', link: '/code/basic/bandwagonhost' },
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
