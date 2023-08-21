// src/mocks/handlers.js
import { rest } from 'msw'
import { commentsURL } from '../components/effect/EffectHook';

const commentsResponse = rest.get(commentsURL, (req, res, ctx) => {
  return res(ctx.json([
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "test@gmail.com",
      body: "laudantium enim quasi estm"
    }
  ]))
})

export const handlers = [commentsResponse];