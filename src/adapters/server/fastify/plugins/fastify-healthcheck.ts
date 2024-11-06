import { FastifyInstance } from 'fastify'
import fastifyHealthcheck from 'fastify-healthcheck'

export default (fastify: FastifyInstance) => {
  fastify.register(fastifyHealthcheck, {
    healthcheckUrl: '/healthcheck',
  })
}
