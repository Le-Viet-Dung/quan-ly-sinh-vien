import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { SinhVienService } from './sinh-vien.service';
import { CreateSinhVienDto } from './dto/create-sinh-vien.dto';

@Controller('sinh-vien')
export class SinhVienController {
  constructor(private readonly sinhVienService: SinhVienService) {}

  @Post()
  async create(@Body() body: CreateSinhVienDto) {
    return await this.sinhVienService.create(body);
  }

  @Get()
  async findAll() {
    return await this.sinhVienService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.sinhVienService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() body: CreateSinhVienDto) {
    return await this.sinhVienService.update(id, body);
  }

  @Delete(':id')
  async xoa(@Param('id', ParseIntPipe) id: number) {
    return await this.sinhVienService.xoa(id);
  }
}
