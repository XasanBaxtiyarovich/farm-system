import { Injectable } from '@nestjs/common';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FiberProduction } from './schemas/fiber_production.schema';
import { Model } from 'mongoose';

@Injectable()
export class FiberProductionService {
  constructor(@InjectModel(FiberProduction.name) private readonly fiberProductionModel: Model<FiberProduction>) {}

  create(createFiberProductionDto: CreateFiberProductionDto) {
    return this.fiberProductionModel.create(createFiberProductionDto);
  }

  findAll() {
    return this.fiberProductionModel.find().populate('animal_id');
  }

  findOne(id: string) {
    return this.fiberProductionModel.findById(id).populate('animal_id');
  }

  update(id: string, updateFiberProductionDto: UpdateFiberProductionDto) {
    return this.fiberProductionModel.findByIdAndUpdate(id, updateFiberProductionDto, {new: true}).populate('animal_id');
  }

  remove(id: string) {
    return this.fiberProductionModel.findByIdAndDelete(id);
  }
}
