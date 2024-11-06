import { FastifyInstance, RouteOptions } from 'fastify'
import { UserController } from '../controllers/register-controller/register'
import { registerSchema } from '../schemas/user-schemas/register'

const userController = new UserController()

const routes: RouteOptions[] = [
  {
    method: 'POST',
    url: '/users',
    schema: {
      tags: ['Users'],
      summary: '',
      description: '',
      ...registerSchema,
    },
    handler: (request, reply) => userController.register(request, reply),
  },
]

export const userRoutes = async (fastify: FastifyInstance) =>
  routes.forEach((route) => fastify.route(route))
