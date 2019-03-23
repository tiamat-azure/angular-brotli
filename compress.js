const brotli = require('brotli')
const fs = require('fs')

const brotliSettings = {
  extension: 'br',
  skipLarger: true,
  mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 11, // 0 - 11,
  lgwin: 12 // default
}

const path = 'dist/angular-brotli';

fs.readdirSync(path).forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
    const result = brotli.compress(fs.readFileSync(path + '/' + file), brotliSettings)
    //fs.writeFileSync(path + '/' + file + '.br', result)
    fs.writeFileSync(path + '/' + file, result)
  }
})
