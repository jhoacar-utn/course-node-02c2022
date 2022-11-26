import './project/test/index.mjs';

import { defineConfig } from 'cypress';
import { handleBeforeRun, handleAfterRun } from './project/test/utils/cypress.mjs';

const port = await handleBeforeRun();
if (!port) {
  throw new Error('port is required for start the testing with cypress');
}

export default defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: `http://localhost:${port}`,
    specPattern: '**/client.test.js',
    setupNodeEvents(on) {
      on('after:run', handleAfterRun);
    },
    responseTimeout: process.env.CYPRESS_TIMEOUT || 30000,
  },
  experimentalInteractiveRunEvents: true,
});
