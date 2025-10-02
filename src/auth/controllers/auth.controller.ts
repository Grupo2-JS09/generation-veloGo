import { UsuarioLogin } from '../entities/usuariologin.entity';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { AuthService } from './../services/auth.service';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

@Controller('/usuarios')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('/logar')
  login(@Body() usuario: UsuarioLogin): Promise<any> {
    return this.authService.login(usuario);
  }
}
