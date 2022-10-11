/* eslint-disable @typescript-eslint/no-floating-promises */
import createServer from 'fastify'
import routes from './routes'

const app = createServer({
  logger: true,
})

app.register(routes)

app.listen({ port: 3001 }).then(
  () => {},
  (error) => {
    app.log.error(error)
    process.exit(1)
  },
)
