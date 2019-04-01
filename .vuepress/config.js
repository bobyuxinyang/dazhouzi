module.exports = {
  title: '大肘子美食笔记',
  description: '美食节目知识库',
  ga: 'UA-32961689-2',
  themeConfig: {
    sidebar: 'auto',
    lastUpdated: '上次更新',

    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'bobyuxinyang/dazhouzi',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Github',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'bobyuxinyang/dazhouzi',
    // if your docs are not at the root of the repo:
    docsDir: '.',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: '在Github上编辑'    
  },
}