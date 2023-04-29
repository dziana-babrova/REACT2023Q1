import { defineConfig } from 'cypress';
import run from '@cypress/code-coverage/task';

export default defineConfig({
  watchForFileChanges: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      run(on, config);
      return config;
    },
  },
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
});
