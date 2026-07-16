import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TUTOR } from '../entities/tutor.entity';
import { TutorService } from './tutor.service';
import { TutorController } from './tutor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TUTOR])],
  controllers: [TutorController],
  providers: [TutorService],
  exports: [TutorService]
})
export class TutorModule {}
