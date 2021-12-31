import copy from 'rollup-plugin-copy'
import cleaner from 'rollup-plugin-cleaner'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

import generatePackageJson from 'rollup-plugin-generate-package-json'
import babel from '@rollup/plugin-babel'
import svg from 'rollup-plugin-svg'
import pkg from './package.json'

module.exports = () => {
  delete pkg.devDependencies
  delete pkg.scripts

  return {
    input: './src/index.jsx',
    output: [
      { file: `dist/${pkg.main}`, format: 'cjs', sourcemap: true },
      { file: `dist/${pkg.module}`, format: 'es', sourcemap: true },
    ],
    external: ['stream'],
    inlineDynamicImports: true,
    plugins: [
      babel({
        presets: ['@babel/preset-react'],
      }),
      nodeResolve({ preferBuiltins: false }), // or `true`
      commonjs(),
      svg(),
      cleaner({
        targets: ['./dist/'],
      }),
      generatePackageJson({
        outputFolder: './dist/',
        baseContents: pkg,
      }),
      copy({
        targets: [{ src: './LICENSE', dest: './dist/' }],
      }),
    ],
  }
}
