import { CreateUserUseCase } from '@/use-cases/create-user-use-case'
import { UserRepositoryAdapter } from '@/infrastructure/adapters/user-repository-adapter'
import { FastifyReply, FastifyRequest } from 'fastify'
import { registerValidation } from '../validations/register'

export class UserController {
  private createUserUseCase: CreateUserUseCase

  constructor() {
    const userRepository = new UserRepositoryAdapter()
    this.createUserUseCase = new CreateUserUseCase(userRepository)
  }

  async createUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, email, password } = registerValidation.parse(request.body)

      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      })
      reply.status(201).send(user)
    } catch (err) {
      reply.status(400).send({ error: 'Error' })
    }
  }
}
