import { Test, TestingModule } from '@nestjs/testing';
import { LopHocService } from './lop-hoc.service';

describe('LopHocService', () => {
  let service: LopHocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LopHocService],
    }).compile();

    service = module.get<LopHocService>(LopHocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
