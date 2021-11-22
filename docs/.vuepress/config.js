module.exports = {
  title: 'Pega eXPerience',

  plugins: [
    ['@vuepress/plugin-google-analytics', {
      id: 'G-CPQN4EHJWQ'
    }]
  ],

  themeConfig: {
    logo: '/images/pegaxp.svg',
    logoDark: '/images/pegaxp-dark.svg',

    navbar: [
      {
        text: 'Guia',
        link: '/guide/'
      },
      {
        text: 'Referência',
        link: '/reference/'
      }
    ],

    sidebar: {
      '/reference/': [
        {
          text: 'Referência',
          children: [
            '/reference/README.md',
            '/reference/class.md',
            '/reference/data-page.md',
            '/reference/service-rest.md'
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guia',
          children: [
            '/guide/README.md',
            '/guide/foundation.md',
            '/guide/application.md',
            '/guide/data-handling.md',
            '/guide/user-interface.md',
            '/guide/case-management.md'
          ]
        },
        {
          text: 'Pega Marketing',
          children: [
            '/guide/pega-marketing/README.md',
            '/guide/pega-marketing/connecting-to-cassandra.md',
            '/guide/pega-marketing/capturing-unique-impression-and-click.md'
          ]
        }
      ]
    }
  }
}
