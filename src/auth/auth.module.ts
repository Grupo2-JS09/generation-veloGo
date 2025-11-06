import { forwardRef, Module } from '@nestjs/common';
import { Bcrypt } from './bcrypt/bcrypt';
import { UsuarioModule } from '../usuario/usuario.module';
@Module({
  imports: [forwardRef(() => UsuarioModule)],
  controllers: [],
  providers: [Bcrypt],
  exports: [Bcrypt],
})
export class AuthModule {}
