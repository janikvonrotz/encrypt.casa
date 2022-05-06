module.exports = {
    title: 'encrypt.casa',
    description: 'Kryptographie und Verschlüsselung',
    themeConfig: {
        logo: '/logo.png',
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
                    { text: 'Thema 1 - Einführung in die Krypographie', link: '/topic-1/' },
                    { text: 'Thema 2 - Zertifikate und Protokolle', link: '/topic-2/' }
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
