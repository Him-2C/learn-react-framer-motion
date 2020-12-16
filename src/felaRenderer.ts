import { createRenderer } from 'fela'
import felaTS from 'fela-plugin-typescript';
import plugins from 'fela-preset-web'

const createFelaRenderer = () => createRenderer({
  plugins: [
    ...plugins,
    felaTS()
  ]
});

export default createFelaRenderer;
