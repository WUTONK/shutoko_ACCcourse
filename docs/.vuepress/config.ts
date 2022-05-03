import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { localeRedirectPlugin } from 'vuepress-plugin-locale-redirect'


module.exports = {
  base:'/shutoku_ACCcourse/',
}

module.exports = {
  base: '/blog/'
}

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
      title: '首都高教程',  
      description: '首都高神力科莎教程文档',
    },
    '/en/': {
      lang: 'en-US',
      title: 'shutoku course',
      description: 'shutoku ACC course docs',
    },
    '/ja/': {
      lang: '日本语',
      title: 'shutoku course',
      description: 'shutoku ACC course docs',
    },
  },
  theme: defaultTheme({
    locales: {
      '/en/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Nested', link: '/nested/' }
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectLanguageText: '选择语言',
        // 该语言在下拉菜单中的标签
        selectLanguageName: '中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '嵌套', link: '/zh/nested/' }
        ],
        sidebar: {
          '/zh/': [/* ... */],
          '/zh/nested/': [/* ... */]
        }
      }
    },
  })
})
