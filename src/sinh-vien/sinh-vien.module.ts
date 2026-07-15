import { Module } from '@nestjs/common';
import { SinhVienController } from './sinh-vien.controller';

@Module({
  controllers: [SinhVienController]
})
export class SinhVienModule {}
