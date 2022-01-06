import commonjs from '@rollup/plugin-commonjs'

import babel from '@rollup/plugin-babel'
import svg from 'rollup-plugin-svg'
import pkg from './package.json'

module.exports = () => {
  delete pkg.devDependencies
  delete pkg.scripts

  const config = {
    external: ['stream', 'react', 'react-dom'],
    inlineDynamicImports: true,
    plugins: [
      babel({
        presets: [['@babel/preset-react', { runtime: 'automatic' }]],
        babelHelpers: 'bundled',
      }),
      commonjs(),
      svg(),
    ],
  }
  return [
    {
      input: './src/index.jsx',
      output: [
        { file: `cjs/${pkg.main}`, format: 'cjs', sourcemap: true },
        { file: `esm/${pkg.module}`, format: 'es', sourcemap: true },
      ],
      ...config,
    },
    {
      input: './src/icons/index.jsx',
      output: [
        { file: `cjs/${pkg.iconmain}`, format: 'cjs', sourcemap: true },
        { file: `esm/${pkg.iconmodule}`, format: 'es', sourcemap: true },
      ],
      ...config,
    },
  ]
}
