import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servico } from './entities/servico.entity';
import { ServicoService } from './services/servico.service';
import { ServicoController } from './controllers/servico.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Servico])],
  providers: [ServicoService],
  controllers: [ServicoController],
  exports: [],
})
export class ServicoModule {}
