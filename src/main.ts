import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: "*", // Allow all origins (not recommended for production)
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  });

  // Use PORT from environment variables or fallback to 3000
  const PORT = process.env.PORT || 5000;
  await app.listen(PORT);
  console.log(`Server is running on http://localhost:${PORT}`);
}

bootstrap();
