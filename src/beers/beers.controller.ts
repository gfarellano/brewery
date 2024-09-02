import {Body, Controller, Get, Post ,Param} from '@nestjs/common';
import { BeersService } from './beers.service';
import { CreateBeerDto } from './dto/create-beer.dto/create-beer.dto';//importante agregar sino no reconoce el Post create

@Controller('beers')
export class BeersController {
    constructor(private readonly beersService: BeersService) {}

  @Get()  
  findAll() {
     return this.beersService.findAll();
  }

  @Get(':id')  
  findOne(@Param() params) {
     return this.beersService.findOne(params.id);
  }

  @Post()  
  create(@Body() createBeerDto: CreateBeerDto) {
     return /*"cerebexa creada"*/this.beersService.create(createBeerDto);
  }


}
