import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entryPoints: ['src/lib/**/*.ts', 'src/lib/**/*.tsx'],
  clean: true,
  splitting: true
});
