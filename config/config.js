const config = {
  mode: 'site',
  title: 'JS知识图谱',
  description: 'JavaScript 完全知识体系',
  base: '/javascript-guidebook/',
  publicPath: '/javascript-guidebook/',
  favicon: './favicon.ico',
  outputPath: 'dist',
  logo: 'http://img.mrsingsing.com/javascript-guidebook-favicon.png',
  hash: true,
  exportStatic: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/onlyxhb/javascript-guidebook',
    },
  ],
  styles: [`.markdown a.beian { color: #b0b1ba; }`, `.markdown a.beian svg { display: none; }`],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
