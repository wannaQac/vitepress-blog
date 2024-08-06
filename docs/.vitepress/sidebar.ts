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
            { text: 'Vscode Plug', link: '/code/vue3/vscodeplug' },
        ]
    },
    {
        text: 'Vue3 语法',
        items: [
            { text: '模版语法', link: '/code/vue3/template' },
            { text: 'Vue 内置指令', link: '/code/vue3/buildinfunction' },
            { text: '虚拟 Dom', link: '/code/vue3/virtualdom' },
            { text: 'Diff 算法', link: '/code/vue3/diffalgorithm' }
        ]
    },
];

const php = [
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
];

export const sidebar = {
    '/code/datastruct/': datastruct,
    '/code/thinkphp/': thinkphp,
    '/code/vue3/': vue3,
    '/code/lang/php/': php,
    '/code/lang/js/': js,
    '/code/database/': database,
    '/code/basic/': basic
};
