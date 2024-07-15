// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Education DAO documentation',
  tagline: 'Preserve and maintain the collective knowledge of web3, sustainably',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://education-dao-organization.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/educationdao.xyz/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EducationDAO', // Usually your GitHub org/user name.
  projectName: 'educationdao.xyz', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs', // Change this to a non-root path
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
        },        
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Education-DAO-organization/educationdao.xyz',
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
      customCss: require.resolve('./src/css/custom.css'),
      image: 'img/education-dao-animated-logo.svg',
      navbar: {
        title: 'EducationDAO',
        logo: {
          alt: 'EducationDAO Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar', // Updated to match the actual sidebar id
            position: 'left',
            label: 'Explore',
          },
          { to: '/blog', label: 'News', position: 'left' },
          {
            href: 'https://github.com/Education-DAO-Organization/',
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
                label: 'Projects',
                to: '/docs/projects',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/24Nqz6zP',
              },
              {
                label: 'Lens Protocol',
                href: 'https://hey.xyz/u/educationdao',
              },
              {
                label: 'Farcaster',
                href: 'https://warpcast.com/educationdao',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Education__DAO',
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Education DAO.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
