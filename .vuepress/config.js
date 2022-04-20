// .vuepress/config.js
module.exports = {
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },                      // 根路径
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' }, // 外部链接
        // 显示下拉列表
        {
          text: 'Languages',
          items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'Japanese', link: '/language/japanese' }
          ]
        },
        // 下拉列表显示分组
        {
          text: '高级',
          items: [
            { 
              text: '算法', 
              items: [
                { text: '冒泡', link: '/language/chinese' },
                { text: '快速', link: '/language/japanese' }
              ] 
            },
            { 
              text: '设计模式', 
              items: [
                { text: '工厂', link: '/language/chinese' },
                { text: '单例', link: '/language/chinese'},
              ] 
            },
          ]
        }
      ]
    }
  }