new Docute({
  target: '#docute',
  sourcePath: '/docs/',
  highlight: ['typescript', 'bash', 'json', 'markdown', 'yaml', 'html', 'css', 'javascript', 'diff'],
  router: { mode: 'history' },
  editLinkBase: 'https://github.com/LyunvyORG/TFWM/tree/master/docs',
  editLinkText: 'Edit this page on GitHub',
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  layout: 'narrow',


  // 用 `versions` 选项在侧边栏添加一个版本选择器
  versions: {
    'v1 (Latest)': {
      link: '/'
    },
    'v0.2': {
      link: '/archive/2/'
    },
    'v0.1': {
      link: '/archive/1/'
    }
  },


  nav: [
    {
      title: 'Home',
      link: './'
    },
    {
      title: 'About',
      link: './about'
    }
  ],
  sidebar: [
    {
      links: [
        {
          title: 'Introduction',
          link: './introduction'
        },
        {
          title: 'Installation',
          link: './installation'
        }
      ]
    }
  ]
})