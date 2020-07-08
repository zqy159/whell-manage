module.exports = {
    title: 'whellssManage',
    head: [
        ['link', { rel: 'icon', href: '/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16' }]
    ],
    port: 9090,
    locales: { // 站点多语言配置
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'whellManage',
            description: 'Vue 驱动的静态网站生成器'
        },
        '/en/': {
            lang: 'en-US',
            title: 'whellManage',
            description: 'Vue-powered Static Site Generator'
        },
        // '/page/whell-charts/': {
        //     lang: 'en-US',
        //     title: 'whell-charts',
        //     description: 'Vue-powered Static Site Generator'
        // },
        // '/page/whell-ui/': {
        //     lang: 'en-US',
        //     title: 'whell-ui',
        //     description: 'Vue-powered Static Site Generator'
        // }
    },
    extraWatchFiles: [],
    // theme: '@vuepress-theme-default', // 主题
    themeConfig: {
        search: true, // 警用默认的搜索框
        nextLinks: true, // 上/先一篇链接
        prevLinks: true,
        // sidebar: 'auto', // 自动显示
        // sidebar: [ // 全部显示
        //     '/guide/',
        //     '/config/base/',
        //     'config/high/'
        // ],
        // sidebar: [ // 分组显示
        //     {
        //         title: '组1',
        //         collapsable: false,
        //         sidebarDepth: 1,
        //         children: ['/guide/']
        //     },
        //     {
        //         title: '组2',
        //         collapsable: false,
        //         sidebarDepth: 1,
        //         children: ['/config/base/', '/config/high/']
        //     },
        //     {
        //         title: '组2',
        //         collapsable: false,
        //         sidebarDepth: 1,
        //         children: ['/config/base/', '/config/high/']
        //     }
        // ],
        sidebar: {
            '/page/whell-charts': [
                {
                    title: 'whell-charts',
                    collapsable: false,
                },
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        { title: '介绍', path: '/page/whell-charts/' },
                    ]
                }
            ],
            '/page/whell-ui': [
                {
                    title: 'whell-charts',
                    collapsable: false,
                },
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        { title: '介绍', path: '/page/whell-ui/' }
                    ]
                }]
        },
        sidebarDepth: 1, // 最大的深度为 2
        navbar: true, // 禁用导航栏
        displayAllHeaders: true, // 显示所有页面的标题链接 默认值：false 
        locales: { // 默认主题多语言配置
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                nav: [
                    { text: '首页', link: '/' },
                    { text: '指南', link: '/guide/' },
                    {
                        text: '组件库',
                        items: [
                            {
                                text: 'chart图表', link: '/page/whell-charts/'
                                // target: '_blank' 
                            },
                            { text: 'ui组件', link: '/page/whell-ui/' }
                        ]
                    }
                ],
                // lastUpdated: '上次更新', // string | boolean

            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    { text: 'home', link: '/en/' },
                    { text: 'guide', link: '/en/guide/' },
                    {
                        text: '组件库',
                        items: [
                            {
                                text: 'chart图表', link: '/page/whell-charts/',
                                // target: '_blank' 
                            },
                            { text: 'ui组件', link: '/page/whell-ui/' }
                        ]
                    }
                ],
                // lastUpdated: 'Last Updated', // string | boolean
            }
        }
    }
}