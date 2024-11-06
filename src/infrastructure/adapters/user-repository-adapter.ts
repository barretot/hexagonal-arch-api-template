import { UserRepository } from '../../domain/repositories/UserRepository'
import { User } from '../../domain/entities/User'
import { InMemoryDatabase } from '../database/in-memory-database'

export class UserRepositoryAdapter implements UserRepository {
  private db: InMemoryDatabase<User>

  constructor() {
    this.db = new InMemoryDatabase<User>()
  }

  async findById(id: string): Promise<User | null> {
    const user = this.db.find((user) => user.id === id)
    return user || null
  }

  async create(user: User): Promise<User> {
    return this.db.create(user)
  }
}
