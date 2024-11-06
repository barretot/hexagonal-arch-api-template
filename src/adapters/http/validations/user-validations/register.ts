import { z } from 'zod'
import fromZodSchema from 'zod-to-json-schema'

export const registerValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

export const registerBodyJsonSchema = fromZodSchema(registerValidation)
