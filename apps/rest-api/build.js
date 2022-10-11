// @ts-check
// esbuild is imported from root node_modules
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const { rm } = require('fs/promises')
const { build } = require('esbuild')

rm('./dist', { recursive: true, force: true })
  .then(() =>
    build({
      entryPoints: ['./src/main.ts'],
      outdir: './dist',
      bundle: true,
      minify: true,
      sourcemap: true,
      platform: 'node',
      target: 'node18',
      logLevel: 'info',
    }),
  )
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
