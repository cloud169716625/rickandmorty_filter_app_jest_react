import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
	test('renders home page', async () => {
		await render(<Home />);
		const linkElement = screen.getByText(/status/i);
		expect(linkElement).toBeInTheDocument();
	});
});
