import { app } from './app';
import { env } from './env';

app
  .listen({
    port: env.PORT,
    host: env.HOST,
  })
  .then(() => {
    console.log(`HTTP Server Running in port ${env.PORT}`);
  });
