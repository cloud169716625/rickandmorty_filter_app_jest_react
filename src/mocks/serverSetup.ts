import { setupServer } from 'msw/node';
import characterHandler from './characterHandler';

const server = setupServer(characterHandler /*anotherHandler*/);

export { server };
