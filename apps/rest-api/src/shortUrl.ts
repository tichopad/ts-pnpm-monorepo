import type { FastifyPluginCallback } from 'fastify'
import { nanoid } from 'nanoid/async'
import fp from 'fastify-plugin'

type OriginalUrl = string
type ShortenedUrlId = string
type ShorteningService = {
  shorten: (url: OriginalUrl) => Promise<ShortenedUrlId>
  shortenedMap: Map<ShortenedUrlId, OriginalUrl>
}

const shortUrl: FastifyPluginCallback = (app, options, done) => {
  const shortenedMap = new Map<ShortenedUrlId, OriginalUrl>()

  const shorten = async (url: OriginalUrl): Promise<ShortenedUrlId> => {
    const shortenedUrlId = await nanoid(10)
    const shortenedUrlPath = `/s/${shortenedUrlId}`
    shortenedMap.set(shortenedUrlId, url)
    return shortenedUrlPath
  }

  const shorteningService: ShorteningService = {
    shorten,
    shortenedMap,
  }

  app.decorate('shortUrl', shorteningService)

  done()
}

declare module 'fastify' {
  interface FastifyInstance {
    shortUrl: ShorteningService
  }
}

export default fp(shortUrl)
