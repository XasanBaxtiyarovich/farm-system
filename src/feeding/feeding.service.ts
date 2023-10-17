import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Feeding } from './schemas/feeding.schema';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';

@Injectable()
export class FeedingService {
  constructor(@InjectModel(Feeding.name) private readonly feedingModel: Model<Feeding>) {}

  create(createFeedingDto: CreateFeedingDto) {
    return this.feedingModel.create(createFeedingDto);
  }

  findAll() {
    return this.feedingModel.find().populate('animal_id').populate('worker_id');
  }

  findOne(id: string) {
    return this.feedingModel.findById(id).populate('animal_id').populate('worker_id');
  }

  update(id: string, updateFeedingDto: UpdateFeedingDto) {
    return this.feedingModel.findByIdAndUpdate(id, updateFeedingDto, {new: true}).populate('animal_id').populate('worker_id');
  }

  remove(id: string) {
    return this.feedingModel.findByIdAndDelete(id);
  }
}
