module.exports = {
    title: 'encrypt.casa',
    description: 'Kryptografie und Verschlüsselung',
    themeConfig: {
        sidebar: 'auto',
        repo: 'janikvonrotz/encrypt.casa',
        docsBranch: 'main',
        editLinks: true,
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Lektionen',
                ariaLabel: 'Auswahl Lektionen',
                items: [
                    { text: 'Thema 1 - Einführung in die Krypografie', link: '/topic-1/' },
                ]
            }
        ]
    },
    plugins: [
        'fulltext-search',
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        'vuepress-plugin-mermaidjs',
        'plausible-analytics',
        '@vuepress/back-to-top',
        '@vuepress/last-updated'
        [
            'vuepress-plugin-sitemap',
            {
                hostname: 'https://encrypt.casa/'
            }
        ]
    ]
}
