import { ServicoService } from './../services/servico.service';
import { Servico } from '../entities/servico.entity';
import {
  Body,
  Controller,
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
  findAllByDestino(@Param('titulo') titulo: string): Promise<Servico[]> {
    return this.servicoService.findAllByDestino(titulo);
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
}
