import { app } from './app'
import { env } from '@/config'

const init = async () => {
  try {
    await app.listen({
      host: '0.0.0.0',
      port: env.PORT,
    })

    console.log({ message: `🚀 Server listening on ${env.PORT}` })
  } catch (error) {
    console.log({ message: `App failed to start: ${error}` })
    process.exit(1)
  }
}

init()
