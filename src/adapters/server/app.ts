import fastify from 'fastify'
import autoload from '@fastify/autoload'
import { join } from 'path'

import { ZodError } from 'zod'
import { env } from '@/config'

export const app = fastify()

app.register(autoload, { dir: join(__dirname, 'fastify', 'plugins') })

console.log(join(__dirname, '..', 'http', 'routes'))

app.register(autoload, {
  dir: join(__dirname, '..', 'http', 'routes'),
  dirNameRoutePrefix: false,
  prefix: '/api',
})

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'prd') {
    console.log(error)
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
