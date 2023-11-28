// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Buffer Documentation',
  tagline: 'Happy Trading',
  favicon: 'img/logos/side-bar-logo.png',

  // Set the production url of your site here
  url: 'https://buffer.finance/',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Buffer Finance', // Usually your GitHub org/user name.
  projectName: 'Buffer Finance Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          routeBasePath: '/',
          editUrl: 'https://github.com/Buffer-Finance/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Buffer-Finance/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logos/side-bar-logo.png',
    navbar: {
      title: 'Buffer Finance',
      logo: {
        alt: 'Buffer Finance Logo',
        src: 'img/logos/side-bar-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Buffer-Finance',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/bufferfinance',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/Hj4QF92Kdc',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Buffer_Finance',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Buffer Finance, Inc. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['bash', 'diff', 'json'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};

module.exports = config;
