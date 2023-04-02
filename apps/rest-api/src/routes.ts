import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import type { FastifyPluginAsync } from 'fastify'
import { Type } from '@sinclair/typebox'
import fp from 'fastify-plugin'
import shortUrl from './shortUrl'

const shortenSchema = {
  querystring: Type.Object({
    url: Type.String(),
  }),
  response: {
    200: Type.Object({
      originalUrl: Type.String(),
      shortenedUrl: Type.String(),
    }),
  },
}

const getShortenedUrlSchema = {
  params: Type.Object({
    shortenedUrlId: Type.String(),
  }),
}

const routes: FastifyPluginAsync = async (app, options) => {
  await app.register(shortUrl)

  app
    .withTypeProvider<TypeBoxTypeProvider>()
    .post('/shorten', { schema: shortenSchema }, async (request, reply) => {
      await reply.send({
        originalUrl: request.query.url,
        shortenedUrl: await app.shortUrl.shorten(request.query.url),
      })
    })
    .get(
      '/s/:shortenedUrlId',
      { schema: getShortenedUrlSchema },
      async (request, reply) => {
        const originalUrl = app.shortUrl.shortenedMap.get(
          request.params.shortenedUrlId,
        )
        if (originalUrl === undefined) {
          await reply.status(404).send()
        } else {
          await reply.redirect(307, originalUrl)
        }
      },
    )
}

export default fp(routes)
