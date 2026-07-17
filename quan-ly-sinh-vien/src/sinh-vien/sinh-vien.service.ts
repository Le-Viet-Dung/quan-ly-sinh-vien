import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STUDENT } from '../entities/student.entity';
import { CreateSinhVienDto } from './dto/create-sinh-vien.dto';

@Injectable()
export class SinhVienService {
  constructor(
    @InjectRepository(STUDENT)
    private readonly studentRepository: Repository<STUDENT>,
  ) {}

  async create(data: CreateSinhVienDto): Promise<STUDENT> {
    const newStudent = this.studentRepository.create(data);
    return await this.studentRepository.save(newStudent);
  }

  async findAll(): Promise<STUDENT[]> {
    return await this.studentRepository.find();
  }

  async findOne(id: number): Promise<STUDENT> {
    const student = await this.studentRepository.findOne({ where: { SID: id } });
    if (!student) throw new NotFoundException(`Không tìm thấy sinh viên ID: ${id}`);
    return student;
  }

  async update(id: number, data: CreateSinhVienDto): Promise<STUDENT> {
    const student = await this.findOne(id);
    Object.assign(student, data);
    return await this.studentRepository.save(student);
  }

  async xoa(id: number): Promise<string> {
    const student = await this.findOne(id);
    await this.studentRepository.remove(student);
    return `Đã xóa thành công sinh viên ID: ${id}`;
  }
}
