import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FiberProductionService } from './fiber_production.service';
import { Animal, AnimalSchema } from '../animals/schemas/animal.schema';
import { FiberProductionController } from './fiber_production.controller';
import { FiberProduction, FiberProductionSchema } from './schemas/fiber_production.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: FiberProduction.name, schema: FiberProductionSchema},
      {name: Animal.name, schema: AnimalSchema}
    ])
  ],
  controllers: [FiberProductionController],
  providers: [FiberProductionService],
})
export class FiberProductionModule {}
