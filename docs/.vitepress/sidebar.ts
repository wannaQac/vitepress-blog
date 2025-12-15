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
    },
    {
        text: '数据库',
        items: [
            { text: '小tips', link: '/code/thinkphp/dbtips' },
            { text: '查询数据', link: '/code/thinkphp/query' },
            { text: '添加数据', link: '/code/thinkphp/insert' },
            { text: '更新数据', link: '/code/thinkphp/update' },
            { text: '连表', link: '/code/thinkphp/join' },
            { text: '分页', link: '/code/thinkphp/paginate' },
        ]
    }
];

const flask = [
    {
        text: '介绍',
        items: [
            { text: '安装', link: '/code/flask/install' },
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
            { text: 'exec不阻塞进程', link: '/code/lang/php/execnoblock' },
            { text: '下载大文件', link: '/code/lang/php/downloadbigfile' },
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
                    { text: 'Windows', link: '/code/lang/python/windows' },
                    { text: 'Conda', link: '/code/lang/python/conda'}, 
                    { text: 'N卡驱动和CUDA', link: '/code/lang/python/cuda'},
                ]
            },
            {
                text: 'Python基础',
                items: [
                    { text: '列表', link: '/code/lang/python/list' },
                    { text: '函数', link: '/code/lang/python/function' }
                ]
            },
            {
                text: 'Python常用的库',
                items: [
                    { text: 'os库', link: '/code/lang/python/ospackage' },
                    { text: 'sys库', link: '/code/lang/python/syspackage' },
                    { text: 'pillow库', link: '/code/lang/python/pillowpackage' }
                ]
            },
            {
                text: '大模型',
                items: [
                    { text: '模型站点', link: '/code/lang/python/modelguanwang' },
                    { text: 'AI画图提示词', link: '/code/lang/python/aiprompt' },
                    { text: 'FLUX.1-Kontext', link: '/code/lang/python/kontext' },
                    { text: 'stable-diffusion-x4-upscale', link: '/code/lang/python/stable-diffusion-x4-upscale' },
                    { text: 'Wan2.2-I2V-A14B-Diffusers', link: '/code/lang/python/wan2.2-i2v-a14b-diffusers' }
                ]
            },
            {
                text: '显卡',
                items: [
                    { text: '监看显卡面板', link: '/code/lang/python/watchsmi' },
                ]
            },
            {
                text: '常见问题',
                items: [
                    { text: '下载换源', link: '/code/lang/python/huanyuan' },
                    { text: 'Tensorflow报错', link: '/code/lang/python/tensorflow' },
                    { text: 'Cario-2缺失', link: '/code/lang/python/cario2' },
                    { text: 'flash-attn安装避坑', link: '/code/lang/python/flash-attn' },
                    { text: 'clipTextModel未定义参数', link: '/code/lang/python/cliptextmodel' },
                    { text: 'torchvision模块引入错误', link: '/code/lang/python/basicsrtensor' }
                ]
            },
            {
                text: '应用',
                items: [
                    { text: '阻塞的长时任务', link: '/code/lang/python/longtask' },
                    { text: '图像转文字', link: '/code/lang/python/jpgtotext' },
                    { text: 'Emoji识别', link: '/code/lang/python/emoji' },
                    { text: 'Emoji打印', link: '/code/lang/python/printemoji' },
                    { text: 'PNG图片压缩', link: '/code/lang/python/pngyasuo' },
                    { text: '图片分辨率缩放', link: '/code/lang/python/imageresize' },
                    { text: '图片画质修复', link: '/code/lang/python/imagexiufu' },
                    { text: '视频画质修复', link: '/code/lang/python/videoxiufu' },
                    { text: '抠图', link: '/code/lang/python/koutu' }
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
        text: 'MySQL',
        items: [
            { text: '数据定义DDL', link: '/code/database/mysqlcreate' },
            { text: '数据查询DQL', link: '/code/database/mysqlselect' },
            { text: '数据操作DML', link: '/code/database/mysqlinsert' },
            { text: '事务控制TCP', link: '/code/database/mysqltransaction' },
            { text: '指针控制CCL', link: '/code/database/mysqlpointer' },
            { text: '函数', link: '/code/database/mysqlfunction' },
            { text: '常见面试基础', link: '/code/database/mysqljichu' }
        ]
    },
    {
        text: 'Sqlite3',
        items: [
            { text: '数据类型', link: '/code/database/sqlitedatatype' }
        ]
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
            { text: 'Nginx', link: '/code/basic/nginx' },
            { text: 'Windows', link: '/code/basic/windows' },
            { text: 'Ubuntu', link: '/code/basic/ubuntu' },
            { text: 'WSL2', link: '/code/basic/wsl2' },
            { text: 'Git', link: '/code/basic/git' },
            { text: 'Svn', link: '/code/basic/svn' },
            { text: 'Multipass', link: '/code/basic/multipass' },
            { text: 'Docker', link: '/code/basic/docker'},
            { text: 'SFTP', link: '/code/basic/sftp'}
        ]
    },
    {
        text: '常用工具与配置',
        items: [
            { text: '常用站点（浏览器收藏）', link: '/code/basic/browser' },
            { text: 'SQLMap', link: '/code/basic/sqlmap' },
            { text: 'Ngrok', link: '/code/basic/ngrok' },
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
    '/code/flask/': flask,
    '/code/vue3/': vue3,
    '/code/lang/php/': php,
    '/code/lang/js/': js,
    '/code/lang/python/': python,
    '/code/database/': database,
    '/code/basic/': basic
};
