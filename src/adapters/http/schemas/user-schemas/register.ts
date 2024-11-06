import { registerBodyJsonSchema } from '../../validations/user-validations/register'

export const registerSchema = {
  body: registerBodyJsonSchema,
  response: {
    201: {
      description: 'User created',
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
      },
    },
  },
}
