const path = require('path');//获取路径
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    base: '/shutoko_ACCcourse/', 
    title: '首都高教程',
    description: '教程文档',

    themeConfig: {
      sidebar: [
       '/home1'
      ],
      sidebar: 'auto',
      sidebarDepth: 3,
      nav: [
        { text: 'Home', link: '/' },                      // 根路径
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' }, // 外部链接
        // 显示下拉列表
        {
          text: 'Languages',
          items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'English', link: '/language/English' },
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'Japanese', link: '/language/japanese' }
          ]
        },
        // 下拉列表显示分组
        {
          text: '联系',
          items: [
            { 
              text: '项目源码', 
              items: [
                { text: 'github', link: '/language/chinese' },
              ] 
            },
            { 
              text: '社交媒体', 
              items: [
                { text: '推特', link: '/language/chinese' },
                { text: '电报', link: '/language/chinese'},
              ] 
            },
          ]
        }
      ]
    }
  }

