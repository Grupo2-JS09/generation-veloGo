import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servico } from '../entities/servico.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private servicoRepository: Repository<Servico>,
  ) {}

  async findAll(): Promise<Servico[]> {
    return await this.servicoRepository.find({
      relations: {
        usuario: true,
        categoria: true,
      },
    });
  }

  async finfById(id: number): Promise<Servico> {
    const servico = await this.servicoRepository.findOne({
      where: {
        id,
      },
      relations: {
        usuario: true,
        categoria: true,
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
      relations: {
        usuario: true,
        categoria: true,
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

  async delete(id: number): Promise<DeleteResult> {
    await this.finfById(id);

    return await this.servicoRepository.delete(id);
  }

  async calcularViagem(id: number): Promise<number> {
    const servico = await this.servicoRepository.findOne({
      where: {
        id,
      },
      relations: {
        usuario: true,
        categoria: true,
      },
    });

    if (!servico)
      throw new HttpException('Serviço não encontrado!', HttpStatus.NOT_FOUND);

    const valorCorrida = servico.distancia * servico.preco_km;

    return valorCorrida;
  }

  async calcularTempo(id: number): Promise<number> {
    const servico = await this.servicoRepository.findOne({
      where: {
        id,
      },
      relations: {
        usuario: true,
        categoria: true,
      },
    });

    if (!servico)
      throw new HttpException('Serviço não encontrado!', HttpStatus.NOT_FOUND);

    const tempoTotal = (servico.distancia / servico.velocidade_media) * 60;

    return tempoTotal;
  }
}
