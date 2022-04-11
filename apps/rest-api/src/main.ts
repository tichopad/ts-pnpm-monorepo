import createServer from 'fastify'

const server = createServer({
  logger: true,
})

server.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

server.listen(3000, function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
