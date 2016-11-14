import mongoose from 'mongoose';
import { AsyncRouter } from 'experess-async-router';

export default (ctx) => {
	const api = AsyncRouter();
	api.all('/', () => ({ok: true, version: '1.0.1'}));
	api.all('test', () => ({test: 12313}));
	return api;
}