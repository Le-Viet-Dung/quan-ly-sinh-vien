import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { SinhVienService, SinhVien } from './sinh-vien.service';

@Controller('sinh-vien')
export class SinhVienController {
  
  // Inject Service vào Controller thông qua constructor
  constructor(private readonly sinhVienService: SinhVienService) {}

  @Get()
  layDanhSach() {
    return this.sinhVienService.layDanhSach();
  }

  @Get(':id')
  layChiTiet(@Param('id') id: string) {
    return this.sinhVienService.layChiTiet(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  themMoi(@Body() duLieuMoi: SinhVien) {
    const ketQua = this.sinhVienService.themMoi(duLieuMoi);
    return {
      message: 'Thêm sinh viên thành công!',
      data: ketQua,
    };
  }

  @Put(':id')
  capNhat(@Param('id') id: string, @Body() duLieuCapNhat: Partial<SinhVien>) {
    const ketQua = this.sinhVienService.capNhat(id, duLieuCapNhat);
    return {
      message: 'Cập nhật thành công!',
      data: ketQua,
    };
  }

  @Delete(':id')
  xoa(@Param('id') id: string) {
    const message = this.sinhVienService.xoa(id);
    return { message };
  }
}
