import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entryPoints: ['src/lib/**/*.ts', 'src/lib/**/*.tsx'],
  splitting: true,
  clean: true,
});

// export default defineConfig({
//   format: ['cjs', 'esm'],
//   entryPoints: ['src/lib/index.ts'],
//   splitting: true,
//   clean: true,
// });
