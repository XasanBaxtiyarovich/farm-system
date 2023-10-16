import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { RecordOfLiness } from './schemas/record_of_liness.schema';
import { CreateRecordOfLinessDto } from './dto/create-record_of_liness.dto';
import { UpdateRecordOfLinessDto } from './dto/update-record_of_liness.dto';

@Injectable()
export class RecordOfLinessService {
  constructor(@InjectModel(RecordOfLiness.name) private readonly recordOfLinessModel: Model<RecordOfLiness>) {}

  create(createRecordOfLinessDto: CreateRecordOfLinessDto) {
    return this.recordOfLinessModel.create(createRecordOfLinessDto);
  }

  findAll() {
    return this.recordOfLinessModel.find().populate('animal_id').populate('worker_id');
  }

  findOne(id: string) {
    return this.recordOfLinessModel.findById(id).populate('animal_id').populate('worker_id');
  }

  update(id: string, updateRecordOfLinessDto: UpdateRecordOfLinessDto) {
    return this.recordOfLinessModel.findByIdAndUpdate(id, updateRecordOfLinessDto, {new: true}).populate('animal_id').populate('worker_id');
  }

  remove(id: string) {
    return this.recordOfLinessModel.findByIdAndDelete(id);
  }
}
