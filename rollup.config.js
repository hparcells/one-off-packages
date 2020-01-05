import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import fs from 'fs';

export default fs.readdirSync('./packages').filter((x) => !x.startsWith('.')).map((name) => ({
  // this file imports logic and gives a node.js prompt
  input: `./packages/${name}/index.ts`,
  plugins: [
    typescript({
      rollupCommonJSResolveHack: true,
      useTsconfigDeclarationDir: true
    }),
    commonjs(),
    resolve({
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      preferBuiltins: true
    })
  ],
  output: {
    file: `./packages/${name}/index.js`,
    format: 'cjs'
  }
}));
