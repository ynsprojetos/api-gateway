import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProxyrmqModule } from './proxyrmq/proxyrmq.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [ProxyrmqModule, CategoriasModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
