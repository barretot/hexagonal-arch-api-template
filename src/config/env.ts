import { z } from 'zod'

export const envs = {
  NODE_ENV: z.enum(['dev', 'test', 'prd']).default('dev'),
  PORT: z.coerce.number(), // Converte para number devido ao corce
}
