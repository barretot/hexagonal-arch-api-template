import { FastifyInstance } from 'fastify'
import { UserController } from '../controllers/register'

export class UserRoutes {
  private userController: UserController

  constructor() {
    this.userController = new UserController()
  }

  public register(fastify: FastifyInstance) {
    fastify.post('/users', (request, reply) =>
      this.userController.createUser(request, reply),
    )
  }
}

export default async function (fastify: FastifyInstance) {
  const userRoutes = new UserRoutes()
  userRoutes.register(fastify)
}
