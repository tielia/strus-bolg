module.exports = {
  locales: ['en', 'es', 'zh'], // 支持的语言
  defaultLocale: 'zh', // 默认语言
  pages: {
    '*': ['common'], // 所有页面都加载common命名空间
    '/[lang]': ['home'],
    '/[lang]/second-page': ['home'],
  },
}