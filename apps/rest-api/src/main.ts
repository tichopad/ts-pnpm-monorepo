import { add } from '@tpm/utils'
import createServer from 'fastify'

const server = createServer({
  logger: true,
})

server.get('/', async (request, reply) => {
  const { default: sayHello } = await import('./fns/hello')
  await reply.send({ hello: `${sayHello()} --> ${add(2, 2)}` })
})

server.listen({ port: 3001 }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
