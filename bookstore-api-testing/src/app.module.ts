import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros.controller';
import { LivrosServices } from './livros.service';

@Module({
  imports: [],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosServices],
})
export class AppModule {}
