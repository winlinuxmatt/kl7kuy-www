// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KL7KUY',
  tagline: 'Ham Radio Blog',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kl7kuy.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'winlinuxmatt', // Your GitHub username
  projectName: 'kl7kuy-www', // Your repo name

  // Change broken links to warn instead of throw to prevent build failures
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Remove routeBasePath to use the default /docs/ path
          // Remove the editUrl to disable "edit this page" links
          // or update it to point to your repository
          // editUrl: 'https://github.com/your-username/your-repo/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove the editUrl to disable "edit this page" links
          // or update it to point to your repository
          // editUrl: 'https://github.com/your-username/your-repo/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'KL7KUY',
        logo: {
          alt: 'KL7KUY Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/about',
            position: 'left',
            label: 'About',
          },
          {
            to: '/docs/ham_radio_projects',
            position: 'left',
            label: 'Projects',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/winlinuxmatt/kl7kuy-www',
            label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Explore',
            items: [
              {
                label: 'About',
                to: '/docs/about',
              },
              {
                label: 'Projects',
                to: '/docs/ham_radio_projects',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'QRZ.com',
                href: 'https://www.qrz.com/db/KL7KUY',
              },
              {
                label: 'eHam.net',
                href: 'https://www.eham.net/',
              },
              {
                label: 'Email Me',
                href: 'mailto:kl7kuy@gmail.com',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'ARRL',
                href: 'https://www.arrl.org/',
              },
              {
                label: 'FCC ULS',
                href: 'https://wireless2.fcc.gov/UlsApp/UlsSearch/license.jsp?licKey=4829860',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/winlinuxmatt/kl7kuy-www',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KL7KUY - Matthew Barnes. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
