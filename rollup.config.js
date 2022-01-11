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
      babel({
        presets: [['@babel/preset-react', { runtime: 'automatic' }]],
        babelHelpers: 'bundled',
      }),
      commonjs(),
      svg(),
      ...(!commandLineArgs.watch
        ? [
            copy({
              targets: [{ src: 'src/index.d.ts', dest: './' }],
            }),
          ]
        : []),
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
