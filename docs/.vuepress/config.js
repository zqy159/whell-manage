module.exports = {
    title: '文档管理',
    head: [
        ['link', { rel: 'icon', href: '/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16'}]
    ],
    port: 9090,
    locales: { // 站点多语言配置
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: '文档管理',
            description: 'Vue 驱动的静态网站生成器'
          },
        '/en/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        }
    },
    extraWatchFiles: [],
    // theme: '@vuepress-theme-default', // 主题
    themeConfig: { 
        search: false, // 警用默认的搜索框
        nextLinks: true, // 上/先一篇链接
        prevLinks: true,
        // sidebar: 'auto', // 自动显示
        // sidebar: [ // 全部显示
        //     '/guide/',
        //     '/config/base/',
        //     'config/high/'
        // ],
        sidebar: [ // 分组显示
            {
                title: '组1',
                collapsable: false,
                sidebarDepth: 1, 
                children: ['/guide/']
            },
            {
                title: '组2',
                collapsable: false,
                sidebarDepth: 1, 
                children: ['/config/base/', '/config/high/']
            }
        ],
        sidebarDepth: 2, // 最大的深度为 2
        navbar: true, // 禁用导航栏
        displayAllHeaders: true, // 显示所有页面的标题链接 默认值：false 
        locales: { // 默认主题多语言配置
            '/': {
                selectText: '选择语言',
                label: '简体中文',
                nav: [
                    { text: '首页', link: '/' },
                    { text: '指南', link: '/guide/'  },
                    { 
                        text: '配置', 
                        items: [
                            { text: '基本配置', link: '/config/base/', 
                            // target: '_blank' 
                            },
                            { text: '高级配置', link: '/config/high/'}
                        ]
                    }
                ],
                
                lastUpdated: '上次更新', // string | boolean
                
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    { text: 'home', link: '/en/' },
                    { text: 'guide', link: '/en/guide/' },
                    { 
                        text: 'config', 
                        items: [
                            { text: 'base', link: '/config/base/' },
                            { text: 'high', link: '/config/high/' }
                        ]
                    }
                ],
                lastUpdated: 'Last Updated', // string | boolean
            }
        }
    }
}