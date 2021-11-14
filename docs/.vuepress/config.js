module.exports = {
  title: 'Pega eXPerience',
  themeConfig: {
    logo: '/images/pegaxp.svg',

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
            '/guide/pega-marketing/capturing-unique-impression-and-click.md'
          ]
        }
      ]
    }
  }
}