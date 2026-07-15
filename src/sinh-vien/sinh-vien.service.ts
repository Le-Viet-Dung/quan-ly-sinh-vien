import { Injectable, NotFoundException } from '@nestjs/common';

// Định nghĩa cấu trúc (Interface) của một Sinh viên
export interface SinhVien {
  id: string;
  hoTen: string;
  chuyenNganh: string;
}

@Injectable()
export class SinhVienService {
  // Chuyển mảng dữ liệu từ Controller sang đây
  private danhSachSinhVien: SinhVien[] = [
    { id: 'SV001', hoTen: 'Nguyễn Văn A', chuyenNganh: 'Công nghệ thông tin' },
    { id: 'SV002', hoTen: 'Trần Thị B', chuyenNganh: 'Kế toán' },
  ];

  // Lấy toàn bộ danh sách
  layDanhSach(): SinhVien[] {
    return this.danhSachSinhVien;
  }

  // Lấy chi tiết 1 sinh viên
  layChiTiet(id: string): SinhVien {
    const sinhVien = this.danhSachSinhVien.find(sv => sv.id === id);
    if (!sinhVien) {
      throw new NotFoundException(`Không tìm thấy sinh viên có ID: ${id}`);
    }
    return sinhVien;
  }

  // Thêm mới sinh viên
  themMoi(duLieuMoi: SinhVien): SinhVien {
    this.danhSachSinhVien.push(duLieuMoi);
    return duLieuMoi;
  }

  // Cập nhật sinh viên
  capNhat(id: string, duLieuCapNhat: Partial<SinhVien>): SinhVien {
    const index = this.danhSachSinhVien.findIndex(sv => sv.id === id);
    
    if (index === -1) {
      throw new NotFoundException(`Không tìm thấy sinh viên có ID: ${id} để cập nhật`);
    }

    // Ghi đè dữ liệu mới vào dữ liệu cũ
    this.danhSachSinhVien[index] = { ...this.danhSachSinhVien[index], ...duLieuCapNhat };
    return this.danhSachSinhVien[index];
  }

  // Xóa sinh viên
  xoa(id: string): string {
    const index = this.danhSachSinhVien.findIndex(sv => sv.id === id);
    
    if (index === -1) {
      throw new NotFoundException(`Không tìm thấy sinh viên có ID: ${id} để xóa`);
    }

    this.danhSachSinhVien.splice(index, 1);
    return `Đã xóa thành công sinh viên ID: ${id}`;
  }
}
