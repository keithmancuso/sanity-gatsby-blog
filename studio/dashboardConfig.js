export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d32151331c2787ca89b8478',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-d42heh22',
                  apiId: '3476be78-d5bb-482f-b824-f9380dc3ba1f'
                },
                {
                  buildHookId: '5d321514f15a5f1be316474b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hhcrxioh',
                  apiId: '7e4593a7-9236-49f4-ae15-f723a35dc221'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/keithmancuso/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hhcrxioh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
