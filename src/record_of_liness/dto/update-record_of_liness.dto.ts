import { PartialType } from '@nestjs/mapped-types';
import { CreateRecordOfLinessDto } from './create-record_of_liness.dto';

export class UpdateRecordOfLinessDto extends PartialType(CreateRecordOfLinessDto) {}
