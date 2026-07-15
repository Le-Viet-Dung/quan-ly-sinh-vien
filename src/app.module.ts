import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SinhVienModule } from './sinh-vien/sinh-vien.module';
import { STUDENT } from './entities/student.entity';
import { TUTOR } from './entities/tutor.entity';
import { TutorModule } from './tutor/tutor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',              // Tài khoản MySQL của bro
      password: '',                  // Mật khẩu MySQL của bro (để trống nếu mặc định)
      database: 'quan_ly_sinh_vien', // Tên database thực tế
      entities: [STUDENT, TUTOR],    // Đăng ký các Entity
      synchronize: true,             // Tự động tạo/đồng bộ bảng mới dưới database khi chạy dev
    }),
    SinhVienModule,
    TutorModule,
  ],
})
export class AppModule {}
