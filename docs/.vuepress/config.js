module.exports = {
    title: '干物靖的博客',
    description: 'this is a personal website',
    themeConfig: {
        sidebar: {
            '/technology/frame/angular/':[
                '',
            ],
            '/travel/':[
                '',
                '黄山'
            ],
            '/reading/':[
                '',
                '对立之美'
            ]

        },
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
                                link: '/technology/frame/angular/'
                            },
                            {
                                text: 'Vue',
                                link: '/technology/frame/vue/'
                            },
                        ]
                    },
                    {
                        text: '基础',
                        ariaLabel: 'basic',
                        items: [
                            {
                                text: '计算机网络',
                                link: '/technology/basic/computer-network/'
                            },
                            {
                                text: '数据结构',
                                link: '/technology/basic/data-structure/'
                            },
                            {
                                text: '操作系统',
                                link: '/technology/basic/operating-system/'
                            },
                        ]
                    },
                    {
                        text: '算法',
                        link: '/technology/algorithm/'
                    },
                ]

            },
            {
                text: '旅行',
                link: '/travel/',
            },
            {
                text: '阅读',
                link: '/reading/',
            },
        ],
        logo: '/assets/img/logo.png',
        lastUpdated: '最后更新',
    },
    plugins: {
        '@vuepress/last-updated': {
            transformer: (timestamp, lang) => {
                const time=new Date(timestamp)
                const time_str = time.getFullYear()+'.'
                                +(time.getMonth()+1)+'.'
                                +time.getDate()+' '
                                +time.getHours()+':'
                                +time.getMinutes()+':'
                                +time.getSeconds();
                return time_str;
            }
        }
    }
}
