import { Test, TestingModule } from '@nestjs/testing';
import { ProblemsService } from './problems.service';
import { getModelToken } from '@nestjs/mongoose';
import { Problem } from './problems.schema';
import { Model } from 'mongoose';

describe('ProblemsService', () => {
  let service: ProblemsService;
  let model: Model<Problem>;

  const mockProblem = { _id: '1', title: 'Sample Problem' } as any;

  const mockProblemModel = {
    find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockProblem]) }),
    findById: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockProblem) }),
    findByIdAndUpdate: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockProblem) }),
    findByIdAndDelete: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockProblem) }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProblemsService,
        {
          provide: getModelToken(Problem.name),
          useValue: mockProblemModel,
        },
      ],
    }).compile();

    service = module.get<ProblemsService>(ProblemsService);
    model = module.get<Model<Problem>>(getModelToken(Problem.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new problem', async () => {
    const saveMock = jest.fn().mockResolvedValue(mockProblem);
    (service as any).problemModel = function () {
      return { save: saveMock };
    };

    const result = await service.create({ title: 'New Problem' });
    expect(saveMock).toHaveBeenCalled();
    expect(result).toEqual(mockProblem);
  });

  it('should return all problems', async () => {
    const result = await service.findAll();
    expect(model.find).toHaveBeenCalled();
    expect(result).toEqual([mockProblem]);
  });

  it('should return a problem by id', async () => {
    const result = await service.findById('1');
    expect(model.findById).toHaveBeenCalledWith('1');
    expect(result).toEqual(mockProblem);
  });

  it('should update a problem', async () => {
    const result = await service.update('1', { title: 'Updated' });
    expect(model.findByIdAndUpdate).toHaveBeenCalledWith('1', { title: 'Updated' }, { new: true });
    expect(result).toEqual(mockProblem);
  });

  it('should delete a problem', async () => {
    const result = await service.delete('1');
    expect(model.findByIdAndDelete).toHaveBeenCalledWith('1');
    expect(result).toEqual(mockProblem);
  });
});
