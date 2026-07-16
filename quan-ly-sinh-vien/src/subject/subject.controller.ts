import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SUBJECT } from '../entities/subject.entity';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  layDanhSach() {
    return this.subjectService.layDanhSach();
  }

  @Get(':id')
  layChiTiet(@Param('id') id: string) {
    return this.subjectService.layChiTiet(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  themMoi(@Body() duLieuMoi: SUBJECT) {
    return this.subjectService.themMoi(duLieuMoi);
  }

  @Put(':id')
  capNhat(@Param('id') id: string, @Body() duLieuCapNhat: Partial<SUBJECT>) {
    return this.subjectService.capNhat(id, duLieuCapNhat);
  }

  @Delete(':id')
  xoa(@Param('id') id: string) {
    return this.subjectService.xoa(id);
  }
}
