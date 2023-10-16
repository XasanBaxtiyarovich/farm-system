import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { MilkProduction } from './schemas/milk_production.schema';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';

@Injectable()
export class MilkProductionService {
  constructor(@InjectModel(MilkProduction.name) private readonly milkProductionModel: Model<MilkProduction>) {}

  create(createMilkProductionDto: CreateMilkProductionDto) {
    return this.milkProductionModel.create(createMilkProductionDto);
  }

  findAll() {
    return this.milkProductionModel.find().populate('animal_id');
  }

  findOne(id: string) {
    return this.milkProductionModel.findById(id);
  }

  update(id: string, updateMilkProductionDto: UpdateMilkProductionDto) {
    return this.milkProductionModel.findByIdAndUpdate(id, updateMilkProductionDto, {new: true}).populate('animal_id');
  }

  remove(id: string) {
    return this.milkProductionModel.findByIdAndDelete(id);
  }
}
