import { Test, TestingModule } from '@nestjs/testing';
import { ProblemsController } from './problems.controller';
import { ProblemsService } from './problems.service';

describe('ProblemsController', () => {
  let controller: ProblemsController;
  let service: ProblemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProblemsController],
      providers: [
        {
          provide: ProblemsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ProblemsController>(ProblemsController);
    service = module.get<ProblemsService>(ProblemsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service.create() when create() is called', async () => {
    const dto = { title: 'New Problem' };
    (service.create as jest.Mock).mockResolvedValue({ _id: '1', ...dto });

    const result = await controller.create(dto);

    expect(service.create).toHaveBeenCalledWith(dto);
    expect(result).toEqual({ _id: '1', title: 'New Problem' });
  });

  it('should return all problems', async () => {
    const mockProblems = [{ _id: '1', title: 'A' }];
    (service.findAll as jest.Mock).mockResolvedValue(mockProblems);

    const result = await controller.findAll();

    expect(service.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockProblems);
  });

  it('should return a problem by id', async () => {
    const mockProblem = { _id: '1', title: 'B' };
    (service.findById as jest.Mock).mockResolvedValue(mockProblem);

    const result = await controller.findById('1');

    expect(service.findById).toHaveBeenCalledWith('1');
    expect(result).toEqual(mockProblem);
  });

  it('should update a problem', async () => {
    const updated = { _id: '1', title: 'Updated' };
    (service.update as jest.Mock).mockResolvedValue(updated);

    const result = await controller.update('1', { title: 'Updated' });

    expect(service.update).toHaveBeenCalledWith('1', { title: 'Updated' });
    expect(result).toEqual(updated);
  });

  it('should delete a problem', async () => {
    const deleted = { _id: '1', title: 'Deleted' };
    (service.delete as jest.Mock).mockResolvedValue(deleted);

    const result = await controller.delete('1');

    expect(service.delete).toHaveBeenCalledWith('1');
    expect(result).toEqual(deleted);
  });
});
