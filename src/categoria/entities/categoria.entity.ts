import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Servico } from '../../servico/entities/servico.entity';

export enum OpcoesCategoria {
  CARRO = 'carro',
  MOTO = 'moto',
}

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({
    type: 'enum',
    enum: OpcoesCategoria,
    default: OpcoesCategoria.CARRO,
    comment: 'Define se a categoria é para carro ou moto.',
  })
  tipo: OpcoesCategoria;

  // @OneToMany(() => Servico, (servico) => servico.categoria)
  // servico: Servico[];
}
