import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_servicos' })
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 19, scale: 4 })
  preco_km: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  distancia: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  velocidade_media: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  destino: string;
}
