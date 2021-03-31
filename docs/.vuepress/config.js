module.exports = {
    title: '干物靖的博客',
    description: 'this is a personal website',
    plugins: [

    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        sidebar: {sidebar:'auto'},
        nav: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '技术',
                ariaLabel: 'technology',
                items: [
                    {
                        text: '框架',
                        ariaLabel: 'frame',
                        items: [
                            {
                                text: 'Angular',
                                link: '/technology/frame/angular'
                            },
                            {
                                text: 'Vue',
                                link: '/technology/frame/vue'
                            },
                        ]
                    },
                    {
                        text: '基础',
                        ariaLabel: 'basic',
                        items: [
                            {
                                text: '计算机网络',
                                link: '/technology/basic/computer-network'
                            },
                            {
                                text: '数据结构',
                                link: '/technology/basic/data-structure'
                            },
                            {
                                text: '操作系统',
                                link: '/technology/basic/operating-system'
                            },
                        ]
                    },
                    {
                        text: '算法',
                        link: '/technology/algorithm'
                    },
                ]

            },
            {
                text: '旅行',
                link: '/travel',
            },
            {
                text: '阅读',
                link: '/reading',
            },
        ],
    }
}