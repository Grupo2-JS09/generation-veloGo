import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ServicoService } from '../services/servico.service';

@Controller('/servicos')
export class ServicoController {
  constructor(private readonly servicoController: ServicoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Service[]> {
    return this.serviceService.findAll();
  }
}
