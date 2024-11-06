import { randomUUID } from 'node:crypto'

export class User {
  id?: string
  name!: string
  email!: string
  password!: string

  constructor(props: User) {
    if (!props.id) {
      this.id = randomUUID()
    }
    Object.assign(this, props)
  }

  static CreateEntity(props: User) {
    return new User(props)
  }
}
