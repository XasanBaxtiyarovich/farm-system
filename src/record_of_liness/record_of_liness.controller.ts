import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordOfLinessService } from './record_of_liness.service';
import { CreateRecordOfLinessDto } from './dto/create-record_of_liness.dto';
import { UpdateRecordOfLinessDto } from './dto/update-record_of_liness.dto';

@Controller('record-of-liness')
export class RecordOfLinessController {
  constructor(private readonly recordOfLinessService: RecordOfLinessService) {}

  @Post()
  create(@Body() createRecordOfLinessDto: CreateRecordOfLinessDto) {
    return this.recordOfLinessService.create(createRecordOfLinessDto);
  }

  @Get()
  findAll() {
    return this.recordOfLinessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordOfLinessService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordOfLinessDto: UpdateRecordOfLinessDto) {
    return this.recordOfLinessService.update(id, updateRecordOfLinessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordOfLinessService.remove(id);
  }
}
