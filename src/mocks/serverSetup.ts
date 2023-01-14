import { setupServer } from 'msw/node';
import { characterHandler, characterDetailHandler } from './characterHandler';

const server = setupServer(characterHandler, characterDetailHandler);

export { server };
