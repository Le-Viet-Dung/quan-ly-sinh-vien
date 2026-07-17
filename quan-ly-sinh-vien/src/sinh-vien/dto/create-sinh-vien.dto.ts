import { IsNotEmpty, IsString, IsEmail, IsOptional, Length, Matches } from 'class-validator';

export class CreateSinhVienDto {
  @IsNotEmpty({ message: 'Tên sinh viên không được để trống' })
  @IsString({ message: 'Tên sinh viên phải là chuỗi ký tự' })
  @Length(3, 50, { message: 'Tên sinh viên phải từ 3 đến 50 ký tự' })
  name: string;

  @IsOptional()
  @IsEmail({}, { message: 'Định dạng email sinh viên không hợp lệ' })
  email?: string;

  @IsOptional()
  @Matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, { message: 'Số điện thoại Việt Nam không hợp lệ (03/05/07/08/09/84 kèm 8 số)' })
  phone?: string;
}
