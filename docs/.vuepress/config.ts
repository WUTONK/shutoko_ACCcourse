import { defineUserConfig } from 'vuepress' //默认vuepress包
import { defaultTheme } from '@vuepress/theme-default' //默认主题
import { localeRedirectPlugin } from 'vuepress-plugin-locale-redirect'//本地重定向包，根据本地语言进行自动重定向

export default defineUserConfig({
  title: '首都高教程',
  description: '教程文档',
  plugins: [
    // @ts-ignore
    localeRedirectPlugin(),
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
    repo: 'WUTONK/shutoko_ACCcourse',

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
        // 多语言下拉菜单的标题
        selectLanguageText: '选择语言',
        // 该语言在下拉菜单中的标签
        selectLanguageName: '中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '编写自',
        nav: [
          { text: '嵌套', link: '/zh/nested/' }
        ],
      
        // 404 page
        notFound: [
          '这里什么都没有',
          '你怎么到这来了？',
          ':(',
          '看看是不是链接打错了？',
        ],
        
        backToHome: '返回首页',
      }
    },
  })
})
