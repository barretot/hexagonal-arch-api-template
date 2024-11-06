import healthcheck from './fastify-healthcheck'
import swagger from './fastify-swagger'

import cors from './fastify-cors'
import { FastifyInstance } from 'fastify'

export async function registerPlugins(fastify: FastifyInstance) {
  swagger(fastify)
  fastify.register(cors)
  fastify.register(healthcheck)
}
