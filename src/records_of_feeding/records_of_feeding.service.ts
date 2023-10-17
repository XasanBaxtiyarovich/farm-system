import { Injectable } from '@nestjs/common';
import { CreateRecordsOfFeedingDto } from './dto/create-records_of_feeding.dto';
import { UpdateRecordsOfFeedingDto } from './dto/update-records_of_feeding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordsOfFeeding } from './schemas/records_of_feeding.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecordsOfFeedingService {
  constructor(@InjectModel(RecordsOfFeeding.name) private readonly recorsOfFeedingModel: Model<RecordsOfFeeding>) {}

  create(createRecordsOfFeedingDto: CreateRecordsOfFeedingDto) {
    return this.recorsOfFeedingModel.create(createRecordsOfFeedingDto);
  }

  findAll() {
    return this.recorsOfFeedingModel.find().populate('feeding_id');
  }

  findOne(id: string) {
    return this.recorsOfFeedingModel.findById(id).populate('feeding_id');
  }

  update(id: string, updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto) {
    return this.recorsOfFeedingModel.findByIdAndUpdate(id, updateRecordsOfFeedingDto, {new: true}).populate('feeding_id');
  }

  remove(id: string) {
    return this.recorsOfFeedingModel.findByIdAndDelete(id);
  }
}
