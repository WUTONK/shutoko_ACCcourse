const path = require('path') //获取路径
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    baseUrl: '/src/',
    runtimeCompiler: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@_D', resolve('docs'))
    }
}

module.exports = {
    plugins: [
      require('vuepress-plugin-redirect')
    ],
    base: '/', 
    title: '首都高教程',
    description: '教程文档',
    //插件列表
    plugins: {
      redirect: {
        locales: true,  // 开启多语言重定向功能
        //自定义重定向器列表，用于重定向到某个文件夹（此项目中用于指定默认语言文件夹）
        redirectors: [
          // 定制化重定向
          {
            base: '/', // 将 `/my-plugins/` 自动重定向到某个子页面
            storage: true, // 保存最后一次访问的结果到 `localStorage`，供下次重定向使用
            alternative: [
              // 提供一个备选列表，如果都找不到就 404 Not Found 
              'src/docs/zh_cn/', // 相当于 `根目录/src/docs/zh_cn`
            ],
          },
        ],
      },
    },
  },  
  
  module.exports = {

    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。

      '/':{
        lang: '简体中文',
        title: '首都高教程',
        description: '首都高神力科莎教程文档',
        selectLanguageName: '简体中文',

      },

      '/src/docs/us_en/page_Getting/': {
        lang: 'English',
        title: 'shutoku course',
        description: 'shutoku ACC course docs',
        selectLanguageName: 'English',
        
      },


      '/src/docs/ja_jp/page_Getting/': {
        lang: '日本语',
        title: 'shutoku course',
        description: 'shutoku ACC course docs',
        selectLanguageName: '日本语',
      },

    },
  
    //定义绝对路径
    chainWebpack: config => {
      config.resolve.alias
    },

    themeConfig: {
      locales:{
        '/':{

          sidebar: [
            {
              title: '主页',
              collapsable: false,
              children: [
                '/', '/src/docs/zh_cn/page-localGame/install',
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
            { text: 'Home', link: '/src/docs/zh_cn/page_Getting/' },    // 根路径
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' }, // 外部链接
            // 显示下拉列表
    
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
                    { text: '推特', link: 'www.twitter.com/WUTONK' },
                    { text: '电报', link: 't.me/WUTONK'},
                  ] 
                },
              ]
            }
          ]
        },
        
        '/src/docs/us_en/page_Getting/':{

          sidebar: [
            {
              title: '主页',
              collapsable: false,
              children: [
                '/', '/src/docs/us_en/page-localGame/install',
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
            { text: 'Homee', link: '/src/docs/zh_cn/page_Getting/' },    // 根路径
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' }, // 外部链接
            // 显示下拉列表
    
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
                    { text: '推特', link: 'www.twitter.com/WUTONK' },
                    { text: '电报', link: 't.me/WUTONK'},
                  ] 
                },
              ]
            }
          ]
        }
      },

      '/src/docs/ja_jp/page_Getting/':{

        sidebar: [
          {
            title: '主页',
            collapsable: false,
            children: [
              '/', '/src/docs/us_en/page-localGame/install',
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
          { text: 'Home', link: '/src/docs/zh_cn/page_Getting/' },    // 根路径
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' }, // 外部链接
          // 显示下拉列表
  
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
                  { text: '推特', link: 'www.twitter.com/WUTONK' },
                  { text: '电报', link: 't.me/WUTONK'},
                ] 
              },
            ]
          }
        ]
      }
    },
  }

