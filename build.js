const fs = require('fs')
const glob = require('glob')

/* arguments:
all
sitemap
*/

// settings
const scheme = 'https://'
const hostname = 'python.casa'
const basePath = '/'
const uriSuffix = '.html'

// Build vars
var args = process.argv.slice(2);
var firstArg = args[0]

if (!firstArg || ['all', 'sitemap'].indexOf(firstArg) > 0) {

    // log
    console.log('Build sitemap ...')

    content = []
    files = [].concat(glob.sync('*.md'), (glob.sync('!(node_modules)**/*.md')))
    files.forEach((file) => {
        content.push(`${scheme}${hostname}${basePath}${file.replace('\.md', '')}${uriSuffix}\n`.replace('README.html',''))
    })

    // write content to index file
    fs.writeFileSync('.vuepress/public/sitemap.txt', content.join(''), 'utf8')

    // log
    console.log('Building sitemap finished.')
}