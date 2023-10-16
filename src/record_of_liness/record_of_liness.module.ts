import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RecordOfLinessService } from './record_of_liness.service';
import { Worker, WorkerSchema } from '../worker/schemas/worker.schema';
import { Animal, AnimalSchema } from '../animals/schemas/animal.schema';
import { RecordOfLinessController } from './record_of_liness.controller';
import { RecordOfLiness, RecordOfLinessSchema } from './schemas/record_of_liness.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: RecordOfLiness.name, schema: RecordOfLinessSchema},
      {name: Animal.name, schema: AnimalSchema},
      {name: Worker.name, schema: WorkerSchema}
    ])
  ],
  controllers: [RecordOfLinessController],
  providers: [RecordOfLinessService],
})
export class RecordOfLinessModule {}
