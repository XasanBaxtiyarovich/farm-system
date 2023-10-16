import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MeatProductionService } from './meat_production.service';
import { Animal, AnimalSchema } from '../animals/schemas/animal.schema';
import { MeatProductionController } from './meat_production.controller';
import { MeatProduction, MeatProductionSchema } from './schemas/meat_production.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: MeatProduction.name, schema: MeatProductionSchema},
      {name: Animal.name, schema: AnimalSchema}
    ])
  ],
  controllers: [MeatProductionController],
  providers: [MeatProductionService],
})
export class MeatProductionModule {}
