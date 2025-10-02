import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_servicos' })
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column('decimal', { scale: 2, precision: 5 })
  preco_km: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  distancia: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  velocidade_media: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  destino: string;
}
