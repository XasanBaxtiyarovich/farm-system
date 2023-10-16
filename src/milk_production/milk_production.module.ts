import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MilkProductionService } from './milk_production.service';
import { Animal, AnimalSchema } from '../animals/schemas/animal.schema';
import { MilkProductionController } from './milk_production.controller';
import { MilkProduction, MilkProductionSchema } from './schemas/milk_production.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: MilkProduction.name, schema: MilkProductionSchema},
      {name: Animal.name, schema: AnimalSchema}
    ])
  ],
  controllers: [MilkProductionController],
  providers: [MilkProductionService],
})
export class MilkProductionModule {}
