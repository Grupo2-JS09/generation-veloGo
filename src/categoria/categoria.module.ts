import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controllers/categoria.controller';
import { CategoriaService } from './services/categoria.service';
import { Categoria } from './entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria]), CategoriaModule],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [],
})
export class CategoriaModule {}
