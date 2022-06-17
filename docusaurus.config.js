// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '井蛙惊梦人',
  tagline: '吴尚智的个人博客与书籍',
  url: 'https://5shangzhi.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '5shangzhi', // Usually your GitHub org/user name.
  projectName: '5shangzhi.github.io', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: '井蛙惊梦人, 吴尚智, 思维, 训练, 因材施教, 学习, 方法'}],
      navbar: {
        title: '井蛙惊梦人',
        logo: {
          alt: '井蛙惊梦人 Logo',
          src: 'img/frog-200.png',
        },
        items: [
          {to: '/blog', label: '公众号文章', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '📖《因材施教》',
          },
          {to: '/aboutme', label: '关于作者', position: 'right'},
          {
            href: 'https://github.com/5shangzhi/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto: wuuhvi@outlook.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '微信公众号',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/5shangzhi/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 井蛙惊梦人&吴尚智`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
