import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SUBJECT } from '../entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SUBJECT)
    private readonly subjectRepository: Repository<SUBJECT>,
  ) {}

  async layDanhSach(): Promise<SUBJECT[]> {
    return await this.subjectRepository.find();
  }

  async layChiTiet(id: string): Promise<SUBJECT> {
    const subject = await this.subjectRepository.findOneBy({ Subject_id: id });
    if (!subject) {
      throw new NotFoundException(`Không tìm thấy Môn học có ID: ${id}`);
    }
    return subject;
  }

  async themMoi(duLieuMoi: SUBJECT): Promise<SUBJECT> {
    const subjectMoi = this.subjectRepository.create(duLieuMoi);
    return await this.subjectRepository.save(subjectMoi);
  }

  async capNhat(id: string, duLieuCapNhat: Partial<SUBJECT>): Promise<SUBJECT> {
    const subject = await this.layChiTiet(id);
    const subjectSauUpdate = this.subjectRepository.merge(subject, duLieuCapNhat);
    return await this.subjectRepository.save(subjectSauUpdate);
  }

  async xoa(id: string): Promise<string> {
    const subject = await this.layChiTiet(id);
    await this.subjectRepository.remove(subject);
    return `Đã xóa thành công Môn học có ID: ${id}`;
  }
}
