import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { plausiblePlugin } from './plausible'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'de-CH',
    title: 'encrypt.casa',
    description: 'Kryptographie und Verschlüsselung',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    theme: defaultTheme({
        logo: 'icon.png',
        repo: 'janikvonrotz/encrypt.casa',
        docsBranch: 'main',
        editLink: true,
        navbar: [
            { text: 'Home', link: '/' },
            {
                text: 'Lektionen',
                children: [
                    { text: 'Thema 1 - Sicherheitsziele', link: '/topic-1/' },
                    { text: 'Thema 2 - Geschichte der Kryptographie', link: '/topic-2/' },
                    { text: 'Thema 3 - Bausteine der Kryptographie', link: '/topic-3/' },
                    { text: 'Thema 4 - GnuPG', link: '/topic-4/' },
                    { text: 'Thema 5 - Repetition und Digitalzertifikate', link: '/topic-5/' },
                    { text: 'Thema 6 - Vertrauen', link: '/topic-6/' },
                    { text: 'Thema 7 - Sichere Webprotokolle', link: '/topic-7/' },
                    { text: 'Thema 8 - Unsichere Webprotokolle', link: '/topic-8/' },
                ]
            }
        ],
        sidebar: {
            '/': [
                {
                    text: 'Einführung in die Kryptographie',
                    collapsible: true,
                    children: [
                        { text: 'Thema 1 - Sicherheitsziele', link: '/topic-1/', collapsible: true, children: ['slides1.md', 'excercise1.md'], },
                        { text: 'Thema 2 - Geschichte der Kryptographie', link: '/topic-2/', collapsible: true, children: ['slides2.md', 'excercise2.md'], },
                        { text: 'Thema 3 - Bausteine der Kryptographie', link: '/topic-3/', collapsible: true, children: ['slides3.md', 'excercise3.md'], },
                        { text: 'Thema 4 - GnuPG', link: '/topic-4/', collapsible: true, children: ['slides4.md', 'excercise4.md'], },
                    ]
                },
                {
                    text: 'Zertifikate und Protokolle',
                    collapsible: true,
                    children: [
                        { text: 'Thema 5 - Repetition und Digitalzertifikate', link: '/topic-5/', collapsible: true, children: ['slides5.md', 'excercise5.md'], },
                        { text: 'Thema 6 - Vertrauen', link: '/topic-6/', collapsible: true, children: ['slides6.md', 'excercise6.md'], },
                        { text: 'Thema 7 - Sichere Webprotokolle', link: '/topic-7/', collapsible: true, children: ['slides7.md', 'excercise7.md'], },
                        { text: 'Thema 8 - Unsichere Webprotokolle', link: '/topic-8/', collapsible: true, children: ['slides8.md', 'excercise8.md'], },
                    ]
                },
            ]
        }
    }),
    plugins: [
        searchPlugin(),
        plausiblePlugin({
            'domain': 'encrypt.casa'
        })
    ],
})