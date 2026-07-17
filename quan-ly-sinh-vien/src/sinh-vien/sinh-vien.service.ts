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
    const { tutorId, subjectIds, ...studentData } = data;
    const newStudent = this.studentRepository.create(studentData);
    
    if (tutorId) {
      newStudent.tutor = { TID: tutorId } as any;
    }

    if (subjectIds && subjectIds.length > 0) {
      newStudent.subjects = subjectIds.map(id => ({ SubID: id } as any));
    }
    
    return await this.studentRepository.save(newStudent);
  }

  async findAll(): Promise<STUDENT[]> {
    return await this.studentRepository.find({ 
      relations: { tutor: true, subjects: true } 
    });
  }

  async findOne(id: number): Promise<STUDENT> {
    const student = await this.studentRepository.findOne({ 
      where: { SID: id },
      relations: { tutor: true, subjects: true } 
    });
    if (!student) throw new NotFoundException(`Không tìm thấy sinh viên ID: ${id}`);
    return student;
  }

  async update(id: number, data: CreateSinhVienDto): Promise<STUDENT> {
    const student = await this.findOne(id);
    const { tutorId, subjectIds, ...studentData } = data;
    
    Object.assign(student, studentData);
    
    if (tutorId) {
      student.tutor = { TID: tutorId } as any;
    }

    if (subjectIds) {
      student.subjects = subjectIds.map(id => ({ SubID: id } as any));
    }
    
    return await this.studentRepository.save(student);
  }

  async xoa(id: number): Promise<string> {
    const student = await this.findOne(id);
    await this.studentRepository.remove(student);
    return `Đã xóa thành công sinh viên ID: ${id}`;
  }
}
