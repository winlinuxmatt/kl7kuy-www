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
  organizationName: 'winlinuxmatt',
  projectName: 'kl7kuy-www',

  // Handle broken links and anchors
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'warn',

  // Markdown configuration
  markdown: {
    mermaid: false,
    format: 'mdx',
    // Handle broken markdown links
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Remove trailing slashes from URLs
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Docusaurus presets
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs', // Serve docs under /docs
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
          {
            to: '/docs/contact',
            position: 'left',
            label: 'Contact',
          },
          // Disabling blog since it's not being used
          // {to: '/blog', label: 'Blog', position: 'left'},
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
        copyright: `Copyright © ${new Date().getFullYear()} KL7KUY - Matthew Barnes. Built with <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
