import { defineUserConfig } from 'vuepress' //默认vuepress包
import { defaultTheme } from '@vuepress/theme-default' //默认主题
import { localeRedirectPlugin } from 'vuepress-plugin-locale-redirect'//本地重定向包，根据本地语言进行自动重定向
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'//返回顶部按钮

export default defineUserConfig({
  title: '首都高教程',
  description: '教程文档',
  plugins: [
    // @ts-ignore
    localeRedirectPlugin(),
    backToTopPlugin(),
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
  
  //主题设置
  theme: defaultTheme({
    //public下的路径
    logo: '/imgs/logo/logob_low.png',
    repo: 'https://github.com/WUTONK/shutoko_ACCcourse',

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

      '/zh/': {
        
        //侧边栏
        /*
        sidebar: {
          
          //给每个导航栏指定配置
          '/guide/': [
            {
              text: 'Guide',
              children: ['/guide/README.md', '/guide/getting-started.md'],
            },
          ],
          '/reference/': [
            {
              text: 'Reference',
              children: ['/reference/cli.md', '/reference/config.md'],
            },
          ],
        },
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
                children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
              },
              {
                text: '数据修改器',
                children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
              },
              {
                text: 'vjoy',
                children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
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
                children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
              },
              {
                text: '安装mod',
                link: '/not-foo/',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
              },
              {
                text: '线上服务器',
                link: '/not-foo/',
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
                children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
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
                children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
              },
              {
                text: 'CM启动器错误',
                link: '/',
                // 该元素将一直处于激活状态
                activeMatch: '/',
                children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
              },
            ],
          },

        ],

        //CSS

        
      }
    },
  })
})
