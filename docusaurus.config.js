// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Teethyz Newsletter',
  tagline: 'Bringing you all the latest news from Teethyz Dentist!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://robloxteethyz.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Newsletter',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RobloxTeethyz', // Usually your GitHub org/user name.
  projectName: 'Newsletter', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          path: "issues",
          routeBasePath: "issues",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RobloxTeethyz/Newsletter/blob/main/',
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
      // Replace with your project's social card
      image: 'img/TeethyzV3Icon.png',
      navbar: {
        title: 'Teethyz Newsletter',
        logo: {
          alt: 'Teethyz Logo',
          src: 'img/TeethyzV3Icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'issuesSidebar',
            position: 'left',
            label: 'Issues',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/teethyz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Teethyz Dentist`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark"
      }
    }),
};

module.exports = config;
