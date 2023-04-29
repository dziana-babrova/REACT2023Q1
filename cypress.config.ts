import { defineConfig } from 'cypress';

export default defineConfig({
  watchForFileChanges: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
