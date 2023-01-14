import '@testing-library/jest-dom';
import { render, screen, act, cleanup, waitFor } from '@testing-library/react';
import Detail from './index';
import Router from 'react-router-dom';
import { server } from '../../mocks/serverSetup';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn()
}));

const createWrapper = () => {
	return render(<Detail />);
};

beforeAll(() => server.listen());
afterEach(() => {
	cleanup();
	server.resetHandlers();
});
afterAll(() => server.close());

describe('Detail Page', () => {
	test('renders character detail page', async () => {
		jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' });
		const wrapper = createWrapper();
		expect(wrapper).toMatchSnapshot();
	});
});
