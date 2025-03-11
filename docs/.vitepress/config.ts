import { defineConfig } from 'vitepress'
import { resolve } from 'path'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  appearance: true,
  base: '/',
  title: 'CP-VueDir',
  description: 'Vue 3 指令集合, 让你的 Vue 3 项目更加强大',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/vuedir/logo.jpg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],
  vite: {
    resolve: {
      alias: {
        '@cp-vuedir/core': resolve(__dirname, '../../core/src')
      }
    }
  },
  themeConfig: {
    logo: '/logo.jpg',
    lastUpdatedText: '最后更新时间',
    editLink: {
      pattern: 'https://github.com/CodePaintStudio/vuedir/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/CodePaintStudio/vuedir/tree/main'
      },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/@cp-vuedir/core'
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: '开始', link: '/guide/' },
      { text: '指令集', link: '/directives/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '安装', link: '/guide/' },
            { text: '特性', link: '/guide/peculiarity' }
          ]
        },
        {
          text: '开发者指南',
          items: [
            { text: '启动', link: '/guide/run' },
            { text: '贡献', link: '/guide/contributing' }
          ]
        }
      ],
      '/directives/': [
        {
          text: 'CP-VueDir 指令集',
          items: [
            { text: '指令集预览', link: '/directives/' },
            {
              text: '交互类',
              items: [
                { text: 'backtop', link: '/directives/backtop' },
                { text: 'clickout', link: '/directives/clickout' },
                { text: 'copy', link: '/directives/copy' },
                { text: 'doubleclick', link: '/directives/doubleclick' },
                { text: 'debounce', link: '/directives/debounce' },
                { text: 'drag', link: '/directives/drag' },
                { text: 'draggablesort', link: '/directives/draggablesort' },
                { text: 'fullscreen', link: '/directives/fullscreen' },
                { text: 'hotkey', link: '/directives/hotkey' },
                { text: 'infinitescroll', link: '/directives/infinitescroll' },
                { text: 'longpress', link: '/directives/longpress' },
                { text: 'mousefollow', link: '/directives/mousefollow' },
                { text: 'scrollto', link: '/directives/scrollto' },
                { text: 'threeclick', link: '/directives/threeclick' },
                { text: 'throttle', link: '/directives/throttle' },
                { text: 'tooltip', link: '/directives/tooltip' },
                { text: 'closetab', link: '/directives/closetab' }
              ]
            },
            {
              text: '视觉类',
              items: [
                { text: 'autobox', link: '/directives/autobox' },
                { text: 'boxresize', link: '/directives/boxresize' },
                { text: 'countup', link: '/directives/countup' },
                { text: 'desaturate', link: '/directives/desaturate' },
                { text: 'ellipsis', link: '/directives/ellipsis' },
                { text: 'fitfont', link: '/directives/fitfont' },
                { text: 'highlight', link: '/directives/highlight' },
                { text: 'marquee', link: '/directives/marquee' },
                { text: 'ripple', link: '/directives/ripple' },
                { text: 'top', link: '/directives/top' },
                { text: 'watermarker', link: '/directives/watermarker' },
                { text: 'headerscroll', link: '/directives/headerscroll' },
                { text: 'loading', link: '/directives/loading' },
                { text: 'invertcolors', link: '/directives/invertcolors' }
              ]
            },
            {
              text: '表单类',
              items: [
                { text: 'autoinputtype', link: '/directives/autoinputtype' },
                { text: 'clearabel', link: '/directives/clearable' },
                { text: 'emoji', link: '/directives/emoji' },
                { text: 'focus', link: '/directives/focus' },
                { text: 'pwdvisible', link: '/directives/pwdvisible' },
                { text: 'trim', link: '/directives/trim' },
                { text: 'verify', link: '/directives/verify' }
              ]
            },
            {
              text: '性能优化类',
              items: [
                { text: 'lazyload', link: '/directives/lazyload' },
                { text: 'preload', link: '/directives/preload' },
                { text: 'spare', link: '/directives/spare' }
              ]
            }
          ]
        }
      ],
      '/demo/': [
        {
          text: '演示',
          items: [{ text: '预加载演示', link: '/demo/preload-demo' }]
        }
      ]
    }
  },
  vue: {
    template: {}
  }
})
