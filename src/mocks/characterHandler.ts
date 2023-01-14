import { rest } from 'msw';

const characterInfo = {
	info: {
		count: '826',
		pages: '42',
		next: 'https://rickandmortyapi.com/api/character?page=2',
		prev: 'null'
	},
	results: [
		{
			id: 1,
			name: 'Rick Sanchez',
			status: 'Alive',
			species: 'Human',
			gender: 'Male'
		},
		{
			id: 2,
			name: 'Morty Smith',
			status: 'Alive',
			species: 'Human',
			gender: 'Male'
		}
	]
};

export const characterHandler = rest.get('https://rickandmortyapi.com/api/character', (_, res, ctx) => {
	return res(ctx.status(200), ctx.json(characterInfo));
});

export const characterDetailHandler = rest.get('https://rickandmortyapi.com/api/character/1', (_, res, ctx) => {
	return res(ctx.status(200), ctx.json(characterInfo));
});
