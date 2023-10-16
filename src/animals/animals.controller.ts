import { FileInterceptor } from '@nestjs/platform-express';
import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFile, Put } from '@nestjs/common';

import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createAnimalDto: CreateAnimalDto, @UploadedFile() image: any) {
    return this.animalsService.create(createAnimalDto, image);
  }

  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(id);
  } 

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto, @UploadedFile() image: any) {
    return this.animalsService.update(id, updateAnimalDto, image);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalsService.remove(id);
  }
}
