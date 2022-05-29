import { defineUserConfig } from 'vuepress' //默认vuepress包
import { defaultTheme } from '@vuepress/theme-default' //默认主题
import { localeRedirectPlugin } from 'vuepress-plugin-locale-redirect'//本地重定向包，根据本地语言进行自动重定向
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'//返回顶部按钮
import { containerPlugin } from '@vuepress/plugin-container' //自定义容器
//import { searchPlugin } from '@vuepress/plugin-search' // 本地搜索插件
//import { docsearchPlugin } from '@vuepress/plugin-docsearch' //未来添加的外部搜索API
import { nprogressPlugin } from '@vuepress/plugin-nprogress'//进度条
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'//图片缩放

export default defineUserConfig({
  title: '首都高教程',
  description: '教程文档',
  plugins: [
    // @ts-ignore
    localeRedirectPlugin(),
    backToTopPlugin(),
    nprogressPlugin(),
    mediumZoomPlugin({
      delay: 100 //切换路由后开始生效的延迟时间
    }),
  ],

  locales: {
    '/zh/': {
      lang: 'zh-CN',
      title: '首都高复活计划',  
      description: '首都高复活计划教程文档',
    },
    '/en/': {
      lang: 'en',
      title: 'shutoko revival project',
      description: 'shutoko revival project docs',
    },
    '/ja/': {
      lang: 'jp',
      title: '首都高复活计划教程',
      description: '首都高复活计划教程文档', //这两行要翻译成全汉字
    },
  },

  /*
  searchPlugin: {

    maxSuggestions = 7
    //将首页排除出可搜索名单
    isSearchable: (page) => page.path !== '/',

    locales: {
      '/en/': {
        placeholder: 'Search',
      },
      '/zh/': {
        placeholder: '搜索',
      },
      '/jp/': {
        placeholder: '搜索',
      },
    },
  },
  */
  
  //主题设置
  theme: defaultTheme({
    //public下的路径
    logo: '/imgs/logo/logob_low.png',
    repo: 'https://github.com/WUTONK/shutoko_ACCcourse',
    smoothScroll: true, //切换页面时平滑滚动

    locales: {
      '/en/': { 
        selectLanguageName: 'English',
        
        notFound: [
          " There's nothing here~ ",
          'Why are you here?',
          ':(',
          'See if the link is wrong?',
        ],
        },

        '/jp/': { 
          selectLanguageName: '',
          
          notFound: [
            " There's nothing here~ ",
            'Why are you here?',
            ':(',
            'See if the link is wrong?',
          ],
        },

      '/zh/': {
        
        //侧边栏
        

        sidebar: {
          
          //给每个导航栏指定配置
          '/': [
            {
              text: 'Guide',
              collapsible: true, //可折叠显示
              children: ['/guide/README.md']
              ['/guide/getting-started.md'],
      
            },
            {
              text: 'Reference',
              collapsible: true,
              children: ['/reference/cli.md', '/reference/config.md'],
            },
          ],
          
          
        },
        sidebarDepth:2,     //侧边栏深度，这里到h3标题
        nextLinks: true,    // 根据侧边栏目录，显示到下一个页面的链接
        prevLinks: true,    // 根据侧边栏目录，显示到上一个页面的链接
        
        /*
        sidebar: [
        //
        {
            title: '安装流程',    // 这一组链接的名字
            //path: '/Chapter1',  // 设置 title 指向的链接（只能包含英文，可以不设置）
            collapsable: true,  // 是否折叠显示
            sidebarDepth: 2,    // 自动从当前文档中提取标题链接，最深提取到 h3 级标题
            children: [         // title 下的子链接
                ['/zh/page-localGame/install', '安装首都高mod'],
                ['/Chapter1/2', '第二节'],
                {
                    title: '第三节',    // 分组链接支持最多三层嵌套
                    children: [
                        '/Chapter1/3.1',
                        '/Chapter1/3.2',
                    ]
                }
            ]
        },
        {
            title: '视频教程',
            children: [ ]
        }
        ],
         */

        // 多语言下拉菜单的标题
        selectLanguageText: '语言',
        // 该语言在下拉菜单中的标签
        selectLanguageName: '中文',
        // 编辑链接文字
        editLinkText: '在GitHub编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '编写自',
        //404 页面中 返回首页 链接的文字。
        backToHome: '返回首页',

        // 404 page
        notFound: [
          '这里什么都没有',
          '你怎么到这来了？',
          ':(',
          '看看是不是链接打错了？',
          '可能我们网站有什么bug~',
        ],
        
        //标题栏
        navbar: [
          // 工具 - 最大深度为 2
          {
            text: '工具',
            children: [
              {
                text: 'CM启动器',
                children: ['/zh/page_CM/install', '/zh/page_CM/use'],
              },
              {
                text: '数据修改器',
                children: ['/zh/page_Modifier/install', '/zh/page_Modifier/car'],
              },
              {
                text: 'vjoy',
                children: ['/zh/page_vjoy/install', '/zh/page_vjoy/use'],
              },

            ],
          },
          {
            text: '指南',
            children: [
              {
                text: '游玩前提',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
                children: ['/zh/sub/', '/group/sub/bar.md'],
              },
              {
                text: '安装mod',
                link: '/not-foo/',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
                children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
              },
              {
                text: '游玩线上服务器教程',
                link: '/',
                children: [],
              },
               {
                text: '查看日志',
                link: '/not-foo/',
                children: [],
              },
            ],
          },
          {
            text: '错误诊断',
            children: [
              {
                text: '安装错误',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
                children: ['/zh/Page_CM/error', '/zh/Page_CM/erro'],
              },
              {
                text: '线下游戏错误',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
                children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
              },
              {
                text: '线上游戏错误',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
                children: ['/zh/page_online/error', '/group/sub/bar.md'],
              },
              {
                text: 'CM启动器错误',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
                children: ['/zh/Page_CM/error', '/group/sub/bar.md'],
              },
            ],
          },
        ],

        //

      }//zh结束

      
    }, 


  })
})
