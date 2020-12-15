export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd86af32c027f93d351df85',
                  title: 'Sanity Studio',
                  name: 'csds-fellowship-poc-studio',
                  apiId: 'a9f9ba82-ca78-46a6-a2b6-334e0d5cba49'
                },
                {
                  buildHookId: '5fd86af31296849306dbcde5',
                  title: 'Blog Website',
                  name: 'csds-fellowship-poc',
                  apiId: '2d71289d-f863-4b6b-bb03-4f4357592feb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brownmestizo/csds-fellowship-poc',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://csds-fellowship-poc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
