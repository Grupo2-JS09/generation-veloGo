import { ServicoService } from './../services/servico.service';
import { Servico } from '../entities/servico.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/servicos')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Servico[]> {
    return this.servicoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Servico> {
    return this.servicoService.finfById(id);
  }

  @Get('/destino/:destino')
  @HttpCode(HttpStatus.OK)
  findAllByDestino(@Param('destino') destino: string): Promise<Servico[]> {
    return this.servicoService.findAllByDestino(destino);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() servico: Servico): Promise<Servico> {
    return this.servicoService.create(servico);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() servico: Servico): Promise<Servico> {
    return this.servicoService.update(servico);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.servicoService.delete(id);
  }
}
