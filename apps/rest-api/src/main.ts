import createServer from 'fastify'

const server = createServer({
  logger: true,
})

server.get('/', async (request, reply) => {
  await reply.send({ hello: 'world' })
})

server.listen(3001, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
