import { rest } from 'msw';

export const handlers = [
    rest.get('/asteroids', (req, res, ctx) => {
        return res(
            ctx.json({
                test: 'test'
            })
        );
    }),
];