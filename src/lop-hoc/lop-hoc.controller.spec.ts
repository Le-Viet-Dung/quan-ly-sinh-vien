import { Test, TestingModule } from '@nestjs/testing';
import { LopHocController } from './lop-hoc.controller';
import { LopHocService } from './lop-hoc.service';

describe('LopHocController', () => {
  let controller: LopHocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LopHocController],
      providers: [LopHocService],
    }).compile();

    controller = module.get<LopHocController>(LopHocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
