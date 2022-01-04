import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

import babel from '@rollup/plugin-babel'
import svg from 'rollup-plugin-svg'
import pkg from './package.json'

module.exports = () => {
  delete pkg.devDependencies
  delete pkg.scripts

  return {
    input: './src/index.jsx',
    output: [
      { file: `cjs/${pkg.main}`, format: 'cjs', sourcemap: true },
      { file: `esm/${pkg.module}`, format: 'es', sourcemap: true },
    ],
    external: ['stream', 'react', 'react-dom'],
    inlineDynamicImports: true,
    plugins: [
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled',
      }),
      nodeResolve({ preferBuiltins: false }), // or `true`
      commonjs(),
      svg(),
    ],
  }
}
