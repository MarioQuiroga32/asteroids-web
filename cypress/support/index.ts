import { setupWorker } from 'msw';
import { handlers } from '../mocks/handlers'; // Assuming you have a 'mocks' folder with your handlers

// Set up a new worker instance with your mock handlers
const worker = setupWorker(...handlers);

// Start the worker
before(() => {
    worker.start();
});

// Stop the worker after all tests are done
after(() => {
    worker.stop();
});