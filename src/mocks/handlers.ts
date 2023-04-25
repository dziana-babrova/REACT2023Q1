import { rest } from 'msw';
import data from './mockData.json';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(data.results[Number(id) - 1]));
  }),
];
