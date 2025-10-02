import {
  Body,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('/categorias')
export class CategoriaController {
  constructor(private readonly CategoriaService: CategoriaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Categoria[]> {
    return this.CategoriaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.CategoriaService.findById(id);
  }

  @Get('/categoria/:categoria')
  @HttpCode(HttpStatus.OK)
  findAllByCategoria(
    @Param('categoria') categoria: string,
  ): Promise<Categoria[]> {
    return this.CategoriaService.findAllByName(categoria);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.CategoriaService.create(categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.CategoriaService.delete(id);
  }
}
