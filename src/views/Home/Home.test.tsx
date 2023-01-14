import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, act, cleanup, waitFor } from '@testing-library/react';
import Home from './index';
import { server } from '../../mocks/serverSetup';

beforeAll(() => server.listen());
afterEach(() => {
	cleanup();
	server.resetHandlers();
});
afterAll(() => server.close());

describe('Home', () => {
	test('renders home page', async () => {
		await act(async () => {
			render(<Home />);
		});
		expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
	});

	test('get all character', async () => {
		await act(async () => {
			render(<Home />);
		});

		const characterList = await waitFor(() => screen.findAllByTestId('characters'));
		expect(characterList).toHaveLength(2);
	});
});
