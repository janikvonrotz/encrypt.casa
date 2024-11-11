import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { plausiblePlugin } from './plausible'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
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
                        { text: 'Thema 1 - Sicherheitsziele', link: '/topic-1/', collapsible: true, children: ['/topic-1/slides1.md', '/topic-1/excercise1.md'], },
                        { text: 'Thema 2 - Geschichte der Kryptographie', link: '/topic-2/', collapsible: true, children: ['/topic-2/slides2.md', '/topic-2/excercise2.md'], },
                        { text: 'Thema 3 - Bausteine der Kryptographie', link: '/topic-3/', collapsible: true, children: ['/topic-3/slides3.md', '/topic-3/excercise3.md'], },
                        { text: 'Thema 4 - GnuPG', link: '/topic-4/', collapsible: true, children: ['/topic-4/slides4.md', '/topic-4/excercise4.md'], },
                    ]
                },
                {
                    text: 'Zertifikate und Protokolle',
                    collapsible: true,
                    children: [
                        { text: 'Thema 5 - Repetition und Digitalzertifikate', link: '/topic-5/', collapsible: true, children: ['/topic-5/slides5.md', '/topic-5/excercise5.md'], },
                        { text: 'Thema 6 - Vertrauen', link: '/topic-6/', collapsible: true, children: ['/topic-6/slides6.md', '/topic-6/excercise6.md'], },
                        { text: 'Thema 7 - Sichere Webprotokolle', link: '/topic-7/', collapsible: true, children: ['/topic-7/slides7.md', '/topic-7/excercise7.md'], },
                        { text: 'Thema 8 - Unsichere Webprotokolle', link: '/topic-8/', collapsible: true, children: ['/topic-8/slides8.md', '/topic-8/excercise8.md'], },
                    ]
                }                
            ]
        }
    }),
    plugins: [
        searchPlugin(),
        plausiblePlugin({
            'domain': 'encrypt.casa'
        }),
        shikiPlugin({
            theme: 'dark-plus'
        }),
    ],
})