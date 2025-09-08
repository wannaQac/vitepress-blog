const datastruct = [
    {
        text: 'Guide',
        items: [
            { text: 'Index', link: '/code/datastruct/' },
            { text: 'One', link: '/code/datastruct/' },
            { text: 'Two', link: '/code/vue3/' }
        ]
    }
];

const thinkphp = [
    {
        text: '介绍',
        items: [
            { text: '安装', link: '/code/thinkphp/install' },
        ]
    }
];

const vue3 = [
    {
        text: 'Vue3 开始',
        items: [
            { text: 'Vue3 新特性', link: '/code/vue3/' },
            { text: 'Vite Init', link: '/code/vue3/vite' },
            { text: 'Vue3 Init', link: '/code/vue3/vue3init' },
            { text: 'Vscode Setting', link: '/code/vue3/vscodeplug' },
            { text: 'Chrome Setting', link: '/code/vue3/chrome' }
        ]
    },
    {
        text: 'Vue3 语法',
        items: [
            { text: '模版语法', link: '/code/vue3/template' },
            { text: 'Vue 内置指令', link: '/code/vue3/buildinfunction' },
            { text: '虚拟 Dom', link: '/code/vue3/virtualdom' },
            { text: 'Diff 算法', link: '/code/vue3/diffalgorithm' },
            { text: 'Ref', link: '/code/vue3/ref' },
            { text: 'toRef', link: '/code/vue3/toref' },
            { text: 'computed 计算属性', link: '/code/vue3/computed' },
            { text: 'watch 监听器', link: '/code/vue3/watch' },
            { text: 'watcheffect 高级监听器', link: '/code/vue3/watcheffect' }
        ]
    },
    {
        text: 'Vue3 组件',
        items: [
            { text: '组件介绍', link: '/code/vue3/component' }
        ]
    }
];

const php = [
    {
        items: [
            { text: '引言', link: '/code/lang/php/' },
        ],
    },
    {
        text: '常见面试题',
        items: [
            { text: '基础', link: '/code/lang/php/jichu' },
        ]
    },
    {
        text: '时间',
        items: [
            { text: '计算运行时间', link: '/code/lang/php/calcruntime' },
        ]
    },
    {
        text: 'LDAP',
        items: [
            { text: 'LDAP介绍', link: '/code/lang/php/ldap' },
            { text: 'LDAP连接客户端认证', link: '/code/lang/php/ldaplogin' }
        ]
    },
    {
        text: '遇到的问题',
        items: [
            { text: 'Form表单项过多无法处理', link: '/code/lang/php/formitemtomuch' },
            { text: '上传文件大小限制', link: '/code/lang/php/uploadfilelimit' },
        ]
    }
];

const js = [
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
];

const python = [
    {
        items: [
            { text: '引言', link: '/code/lang/python/' },
            {
                text: '环境搭建',
                items: [
                    { text: 'Ubuntu', link: '/code/lang/python/ubuntu' },
                ]
            },
            {
                text: '图像识别',
                items: [
                    { text: '图像转文字', link: '/code/lang/python/jpgtotext' },
                ]
            },
        ],
        
    },
]

const database = [
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
];

const basic = [
    {
        text: '基础建设',
        items: [
            { text: '引言', link: '/code/basic/' },
            { text: 'Nvm', link: '/code/basic/nvm' },
            { text: 'Npm', link: '/code/basic/npm' },
            { text: 'PHP', link: '/code/basic/php' },
            { text: 'Ubuntu', link: '/code/basic/ubuntu' },
            { text: 'Git', link: '/code/basic/git' },
            { text: 'Svn', link: '/code/basic/svn' },
            { text: 'Multipass', link: '/code/basic/multipass' }
        ]
    },
    {
        text: '常用工具与配置',
        items: [
            { text: '常用站点（浏览器收藏）', link: '/code/basic/browser' },
        ]
    },
    {
        text: '服务器',
        items: [
            { text: 'bandwagonhost（搬瓦匠）', link: '/code/basic/bandwagonhost' },
        ]
    },
    {
        text: '博客站点',
        items: [
            { text: 'astro', link: '/code/basic/astro' },
        ]
    }
];

export const sidebar = {
    '/code/datastruct/': datastruct,
    '/code/thinkphp/': thinkphp,
    '/code/vue3/': vue3,
    '/code/lang/php/': php,
    '/code/lang/js/': js,
    '/code/lang/python/': python,
    '/code/database/': database,
    '/code/basic/': basic
};
