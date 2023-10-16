import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AdminModule } from './admin/admin.module';
import { WorkerModule } from './worker/worker.module';
import { BlocksModule } from './blocks/blocks.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { AnimalsModule } from './animals/animals.module';
import { SpecialityModule } from './speciality/speciality.module';
import { AnimalTypeModule } from './animal_type/animal_type.module';
import { WorkerBlockModule } from './worker_block/worker_block.module';
import { VaccinationHistoryModule } from './vaccination_history/vaccination_history.module';
import { MeatProductionModule } from './meat_production/meat_production.module';
import { FiberProductionModule } from './fiber_production/fiber_production.module';
import { MilkProductionModule } from './milk_production/milk_production.module';
import { RecordOfLinessModule } from './record_of_liness/record_of_liness.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static')
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb+srv://xasan777:88xasan175@cluster0.3fgytu3.mongodb.net/fermer' ),
    AdminModule,
    SpecialityModule,
    WorkerModule,
    BlocksModule,
    WorkerBlockModule,
    VaccineModule,
    AnimalTypeModule,
    AnimalsModule,
    VaccinationHistoryModule,
    MeatProductionModule,
    FiberProductionModule,
    MilkProductionModule,
    RecordOfLinessModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}