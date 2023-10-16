import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { MeatProduction } from './schemas/meat_production.schema';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';

@Injectable()
export class MeatProductionService {
  constructor(@InjectModel(MeatProduction.name) private readonly meatProductionModel: Model<MeatProduction>) {}

  create(createMeatProductionDto: CreateMeatProductionDto) {
    return this.meatProductionModel.create(createMeatProductionDto);
  }

  findAll() {
    return this.meatProductionModel.find().populate('animal_id');
  }

  findOne(id: string) {
    return this.meatProductionModel.findById(id).populate('animal_id');
  }

  update(id: string, updateMeatProductionDto: UpdateMeatProductionDto) {
    return this.meatProductionModel.findByIdAndUpdate(id, updateMeatProductionDto, {new: true}).populate('animal_id');
  }

  remove(id: string) {
    return this.meatProductionModel.findByIdAndDelete(id);
  }
}
