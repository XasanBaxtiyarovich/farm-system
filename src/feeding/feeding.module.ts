import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FeedingService } from './feeding.service';
import { FeedingController } from './feeding.controller';
import { Feeding, FeedingSchema } from './schemas/feeding.schema';
import { Worker, WorkerSchema } from '../worker/schemas/worker.schema';
import { Animal, AnimalSchema } from '../animals/schemas/animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Feeding.name, schema: FeedingSchema},
      {name: Animal.name, schema: AnimalSchema},
      {name: Worker.name, schema: WorkerSchema}
    ])
  ],
  controllers: [FeedingController],
  providers: [FeedingService],
})
export class FeedingModule {}
