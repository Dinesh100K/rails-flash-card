const { build } = require('esbuild')

build({
  entryPoints: ['app/javascript/*.*'],
  bundle: true,
  sourcemap: true,
  outdir: 'app/assets/builds',
  publicPath: 'assets',
  loader: {
    '.js': 'jsx',
    '.locale.json': 'file',
    '.json': 'json',
    '.png': 'file',
    '.jpeg': 'file',
    '.jpg': 'file',
    '.svg': 'file',
  },
}).catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})
