const path = require('path');//获取路径
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    base: '/shutoko_ACCcourse/', 
    title: '首都高教程',
    description: '教程文档',

    //定义绝对路径
    chainWebpack: config => {
      config.resolve.alias
        .set('_zhcn_img_', resolve('/zh_cn/imgs')) //中文图片路径
        .set('_usen_img_',resolve('/us_en/imgs')) //英文图片路径
        .set('_zh_cn_',resolve('/zh_cn')) //中文页面路径
        .set('_us_en_',resolve('/us_en')) //英文页面路径
        .set('',resolve(''))
        .set('',resolve(''))
    },

    themeConfig: {
      sidebar: [
        {
          title: '主页',
          collapsable: false,
          children: [
            '/', '/page-localGame/install',
          ]
        },
        {
          title: '二组题目',
          children: [
            ['/home2', 'home2自定义题目'], 
            '/home3',
            '/中文',
          ]
        },
      ],  
      sidebar: 'auto', //自动显示奇遇侧边栏
      sidebarDepth: 3, //显示到三级标题
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
                { text: '推特', link: '/twitter/WUTONK' },
                { text: '电报', link: '/WUTONK'},
              ] 
            },
          ]
        }
      ]
    }
  }

