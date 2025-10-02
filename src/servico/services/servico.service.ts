import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servico } from '../entities/servico.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private servicoRepository: Repository<Servico>,
  ) {}

  async findAll(): Promise<Servico[]> {
    return await this.servicoRepository.find();
  }

  async finfById(id: number): Promise<Servico> {
    const servico = await this.servicoRepository.findOne({
      where: {
        id,
      },
    });

    if (!servico)
      throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);

    return servico;
  }

  async findAllByDestino(destino: string): Promise<Servico[]> {
    return await this.servicoRepository.find({
      where: {
        destino: ILike(`%${destino}%`),
      },
    });
  }

  async create(servico: Servico): Promise<Servico> {
    return await this.servicoRepository.save(servico);
  }

  async update(servico: Servico): Promise<Servico> {
    await this.finfById(servico.id);

    return await this.servicoRepository.save(servico);
  }
}
