import resolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import babel from '@rollup/plugin-babel'
import svg from 'rollup-plugin-svg'
import pkg from './package.json'

module.exports = (commandLineArgs) => {
  delete pkg.devDependencies
  delete pkg.scripts

  const config = {
    external: ['stream', 'react', 'react-dom'],
    inlineDynamicImports: true,
    plugins: [
      resolve({
        browser: true,
        jsnext: true,
        extensions: ['.js', '.jsx'],
      }),
      babel({
        presets: [['@babel/preset-react', { runtime: 'automatic' }]],
        babelHelpers: 'bundled',
      }),
      commonjs(),
      svg(),
      ...(!commandLineArgs.watch
        ? [
            copy({
              targets: [{ src: 'src/typings/*', dest: './' }],
            }),
          ]
        : []),
    ],
  }

  return [
    {
      input: './src/index.jsx',
      output: [
        { file: `cjs/index.js`, format: 'cjs', sourcemap: true },
        { file: `esm/index.js`, format: 'es', sourcemap: true },
      ],
      ...config,
    },
    {
      input: './src/icons/index.jsx',
      output: [
        { file: `cjs/icons.js`, format: 'cjs', sourcemap: true },
        { file: `esm/icons.js`, format: 'es', sourcemap: true },
      ],
      ...config,
    },
  ]
}
