

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const name = '辰星';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: name,
  //tagline: 'Dinosaurs are cool',
  url: 'https://doc.leezihong.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  organizationName: 'leekihom', 
  projectName: 'docusaurus', 


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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      announcementBar: {
        id: "feature_release", // Any value that will identify this message.
        content: `这是置顶的通知栏`,
        backgroundColor: "#fafbfc", // Defaults to `#fff`.
        textColor: "#091E42", // Defaults to `#000`.
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: name,
        logo: {
          alt: 'Logo',
          src: 'img/logo.webp',
          srcDark: 'img/logo.webp',
        },
        items: [
          {
            label: '归档',
            position: 'right',
            to: '/blog',
          },
          {
            label: '学习',
            position: 'right',
            to: '/blog',
          },
          {
            label: 'Blog', 
            position: 'right',
            to: '/blog', 
          },
          {
            label: 'GitHub',
            position: 'right',
            href: 'https://github.com/leekihom/docusaurus',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '学习',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: '关于我',
                to: '/about',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
              },
            ],
          },
        ],
        copyright: `<p><a href="http://beian.miit.gov.cn/" >渝ICP备2021011172号-1</a></p>Copyright © ${new Date().getFullYear()} <a href="https://doc.leezihong.cn/">${name}</a>, Inc. Built with Docusaurus2.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'sql'],
        defaultLanguage: 'javascript',
      },
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },
    }),
};

module.exports = config;
