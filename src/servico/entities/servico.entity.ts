import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';

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

  @ManyToOne(() => Usuario, (usuario) => usuario.id, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @ManyToOne(() => Categoria, (categoria) => categoria.id, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
