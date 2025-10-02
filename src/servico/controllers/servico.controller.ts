import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ServicoService } from '../services/servico.service';
import { Servico } from '../entities/servico.entity';

@Controller('/servicos')
export class ServicoController {
  constructor(private readonly servicoController: ServicoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Servico[]> {
    return this.servicoController.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Servico> {
    return this.servicoController.finfById(id);
  }
}
