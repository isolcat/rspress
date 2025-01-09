import path from 'node:path';
import { pluginTypeDoc } from '@rspress/plugin-typedoc';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'doc'),
  plugins: [
    pluginTypeDoc({
      entryPoints: [
        path.join('./src/index.ts'),
        // path.join('../../packages/rspack/src/hello.ts')
      ],
    }),
  ],
});
