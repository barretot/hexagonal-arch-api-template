import { CreateUserUseCase } from '@/use-cases/user-use-case/register'
import { UserRepositoryAdapter } from '@/infrastructure/adapters/user-repository-adapter'
import { FastifyReply, FastifyRequest } from 'fastify'
import { registerValidation } from '../../validations/user-validations/register'

export class UserController {
  private createUserUseCase: CreateUserUseCase

  constructor() {
    const userRepository = new UserRepositoryAdapter()
    this.createUserUseCase = new CreateUserUseCase(userRepository)
  }

  async register(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = registerValidation.parse(request.body)

    const user = await this.createUserUseCase.execute({
      name,
      email,
      password,
    })

    return reply.status(201).send(user)
  }
}
