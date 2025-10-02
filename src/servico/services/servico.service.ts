import { Servico } from './../entities/servico.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servico } from '../entities/servico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private servicoRepository: Repository<Servico>,
  ) {}

  async findAll() Promise<Servico[]>{
    return await this.servicoRepository.find()
  }
}
