const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
const { plausiblePlugin } = require('./plausible')

module.exports = {
    lang: 'de-CH',
    title: 'encrypt.casa',
    description: 'Kryptographie und Verschlüsselung',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    theme: defaultTheme({
        logo: 'logo.png',
        repo: 'janikvonrotz/encrypt.casa',
        docsBranch: 'main',
        editLink: true,
        navbar: [
            { text: 'Home', link: '/' },
            {
                text: 'Lektionen',
                children: [
                    { text: 'Thema 1 - Einführung in die Krypographie', link: '/topic-1/' },
                    { text: 'Thema 2 - Zertifikate und Protokolle', link: '/topic-2/' }
                ]
            }
        ],
    }),
    plugins: [
        searchPlugin(),
        plausiblePlugin({
            'domain': 'encrypt.casa'
        })
    ],
}
