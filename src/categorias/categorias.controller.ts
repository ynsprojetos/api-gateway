import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppController } from 'src/app.controller';
import { AtualizarCategoriaDto } from 'src/dtos/atualizar-categoria.dto';
import { CriarCategoriaDto } from 'src/dtos/criar-categoria.dto';
import { ClientProxySmartRanking } from 'src/proxyrmq/client-proxy';

@Controller('api/v1/categorias')
export class CategoriasController {
  private logger = new Logger(AppController.name);

  constructor(private clientProxySmartRanking: ClientProxySmartRanking) {}

  private clientAdminBackend =
    this.clientProxySmartRanking.getClientProxyAdminBackendInstance();

  @Post()
  @UsePipes(ValidationPipe)
  criarCategoria(@Body() criarCategoriaDTO: CriarCategoriaDto) {
    this.clientAdminBackend.emit('criar-categoria', criarCategoriaDTO);
  }

  @Get()
  consultarCategorias(@Query('idCategoria') id: string): Observable<any> {
    return this.clientAdminBackend.send('consultar-categorias', id ? id : '');
  }

  @Put('/:id')
  atualizarCategoriaa(
    @Body() atualizarCategoria: AtualizarCategoriaDto,
    @Param('id') id: string,
  ): Observable<any> {
    return this.clientAdminBackend.emit('atualizar-categoria', {
      id: id,
      categoria: atualizarCategoria,
    });
  }
}
