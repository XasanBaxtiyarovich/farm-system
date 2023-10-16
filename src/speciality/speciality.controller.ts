import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { SpecialityService } from './speciality.service';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';

@Controller('speciality')
export class SpecialityController {
  constructor(private readonly specialityService: SpecialityService) {}

  @Post()
  create(@Body() createSpecialityDto: CreateSpecialityDto) {
    return this.specialityService.create(createSpecialityDto);
  }

  @Get()
  findAll() {
    return this.specialityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialityService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSpecialityDto: UpdateSpecialityDto) {
    return this.specialityService.update(id, updateSpecialityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialityService.remove(id);
  }
}
