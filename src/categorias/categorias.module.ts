import { ProxyrmqModule } from './../proxyrmq/proxyrmq.module';
import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';

@Module({
  controllers: [CategoriasController],
  imports: [ProxyrmqModule],
})
export class CategoriasModule {}
