import { defineUserConfig } from 'vuepress' //默认vuepress包
import { defaultTheme } from '@vuepress/theme-default' //默认主题
import { localeRedirectPlugin } from 'vuepress-plugin-locale-redirect'//本地重定向包，根据本地语言进行自动重定向
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'//返回顶部按钮
import { containerPlugin } from '@vuepress/plugin-container' //自定义容器
// import { searchPlugin } from '@vuepress/plugin-search' // 本地搜索插件
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
      title: '首都高再生計画',
      description: '首都高再生計画文档', 
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
      
      //日语
      '/jp/': { 
        // 多语言下拉菜单的标题
        selectLanguageText: '言語変更',
        // 该语言在下拉菜单中的标签
        selectLanguageName: '日本語',
        // 编辑链接文字
        editLinkText: 'GitHubでこのページを編集する',
        lastUpdatedText: '最終更新',
        contributorsText: '作成者',
        //404 页面中 返回首页 链接的文字。
        backToHome: 'トップページに',

        // 404 page
        notFound: [
          "申し訳ありませんが、このサイトはまだ日本語に対応していません。翻訳に参加したい場合は、githubで詳細を確認してください。",
          'ここには何もありません(｡･ω･｡)',
          'どうしてここに来たの？╭(°A°`)╮',
          ':(',
          'リンクの入力が間違っているかどうか見てみましょう？_(:з」∠)_',
          'このサイトにはbug~があるかもしれません（笑）',
        ],
      },

      //中文
      '/zh/': {
        
        //侧边栏
        sidebar: {
          
          //给每个导航栏指定配置
          // 在什么路径下显示
          '/': [
            {
              text: '安装流程',
              collapsible: true, //可折叠显示
              children: ['/']
              ['/guide/getting-started.md'],
      
            },
            {
              text: '教程视频',
              collapsible: true,
              children: ['/zh/page_videos/', '/reference/config.md'],
            },
            {
              text: '错误诊断',
              children: [
                {
                  text: '安装错误',
                  link: '/',
                  // 该元素将一直处于激活状态         
                  // activeMatch: '/',
                  children: ['/zh/Page_CM/error', '/zh/Page_CM/erro'],
                },
                {
                  text: '线下游戏错误',
                  link: '/',            
                   
                  children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
                },
                {
                  text: '线上游戏错误',
                  link: '/',               
                   
                  children: ['/zh/page_online/error', '/group/sub/bar.md'],
                },
                {
                  text: 'CM启动器错误',
                  link: '/',                 
                  children: ['/zh/Page_CM/error', '/group/sub/bar.md'],
                },
              ],
            },
            {
              text: '上海湾岸午夜俱乐部',
              collapsible: true,
              children: [
                {
                  text: '关于我们',
                  link: '/',
                  activeMatch: '/',
                  children: ['/zh/page_shmc/indexes/#关于我们'],
                },
                {
                  text: '游玩服务器教程',
                  link: '/',
                  activeMatch: '/',
                  children: ['/zh/page_shmc/indexes/#如何游玩'],
                },
                {
                  text: '错误诊断',
                  link: '/',
                  activeMatch: '/',
                  children: ['/zh/page_shmc/indexes/#如何诊断',
                  '/zh/page_shmc/indexes/#如何提问',],
                },
                {
                  text: '必须和推荐资源',
                  link: '/',
                   
                  activeMatch: '/',
                  children: ['/zh/page_download/ConsolidationPack'],
                  
                },
                {
                  text: '画质补丁',
                  link: '/',
                  activeMatch: '/',
                  children: ['/zh/Page_mod/gui'],
                },
              ],
            },
          ],
          
          
        },
        sidebarDepth:2,     //侧边栏深度，这里到h3标题
        nextLinks: true,    // 根据侧边栏目录，显示到下一个页面的链接
        prevLinks: true,    // 根据侧边栏目录，显示到上一个页面的链接
        
        /*
        sidebar: [
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
        selectLanguageName: '简体中文',
        // 编辑链接文字
        editLinkText: '在GitHub编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '编写自',
        //404 页面中 返回首页 链接的文字。
        backToHome: '返回首页',

        // 404 page
        notFound: [
          '这里什么都没有(｡･ω･｡)',
          '你怎么到这来了？',
          ':(',
          '看看是不是链接打错了？_(:з」∠)_',
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
                children: ['/zh/page_CM/install', '/zh/page_CM/error'],
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
                activeMatch: '/',
                children: ['/zh/Page_CM/error', '/zh/Page_CM/error'],
              },
              {
                text: '线下游戏错误',
                link: '/',
                activeMatch: '/',
                children: ['/zh/sub/foo.md', '/group/sub/bar.md'],
              },
              {
                text: '线上游戏错误',
                link: '/',
                activeMatch: '/',
                children: ['/zh/page_online/error', '/group/sub/bar.md'],
              },
              {
                text: 'CM启动器错误',
                link: '/', 
                activeMatch: '/',
                children: ['/zh/Page_CM/error', '/group/sub/bar.md'],
              },
            ],
          },
          {
            text: '资源',
            children: [
              {
                text: '车辆资源',
                link: '/',
                 
                activeMatch: '/',
                children: ['/zh/Page_mod/car'],
              },
              {
                text: '地图资源',
                link: '/',
                 
                activeMatch: '/',
                children: ['/zh/page_download/map'],
              },
              {
                text: '整合包资源',
                link: '/',
                 
                activeMatch: '/',
                children: ['/zh/page_download/ConsolidationPack'],
              },
              {
                text: '画质补丁',
                link: '/',
                 
                activeMatch: '/',
                children: ['/zh/Page_mod/gui'],
              },
              {
                text: '音效补丁',
                link: '/',
                 
                activeMatch: '/',
                children: ['/zh/Page_mod/sound'],
              },
            ],
          },
        ],
        


        //

      }//zh结束

      
    }, 


  })
})
