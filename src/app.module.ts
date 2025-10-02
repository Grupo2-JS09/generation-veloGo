import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Servico } from './servico/entities/servico.entity';
import { ServicoModule } from './servico/servico.module';
import { Module } from '@nestjs/common';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_veloGo',
      entities: [Usuario, Servico, Categoria],
      synchronize: true,
      // logging: true,
    }),
    UsuarioModule,
    ServicoModule,
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
