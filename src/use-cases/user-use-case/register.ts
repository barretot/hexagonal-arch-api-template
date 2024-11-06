import { UserRepository } from '@/domain/repositories/UserRepository'
import { User } from '@/domain/entities/User'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

interface RegisterUseCaseResponse {
  user: User
}
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    name,
    email,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const userEntity = User.CreateEntity({ name, email, password })

    const user = await this.userRepository.create(userEntity)

    return { user }
  }
}
