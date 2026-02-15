import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Problem } from './problems.schema';

@Injectable()
export class ProblemsService {
    constructor(@InjectModel(Problem.name) private problemModel: Model<Problem>) {}

    async create(problemData: Partial<Problem>): Promise<Problem> {
        const newProblem = new this.problemModel(problemData);
        return newProblem.save();
    }

    async findAll(): Promise<Problem[]> {
        return this.problemModel.find().exec();
    }

    async findById(id: string): Promise<Problem | null> {
        return this.problemModel.findById(id).exec();
    }

    async update(id: string, updateData: Partial<Problem>): Promise<Problem | null> {
        return this.problemModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }

    async delete(id: string): Promise<Problem | null> {
        return this.problemModel.findByIdAndDelete(id).exec();
    }
}
