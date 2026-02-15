import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ProblemsService } from './problems.service';

@Controller('problems')
export class ProblemsController {
    constructor(private readonly problemsService: ProblemsService) {}

    @Post()
    async create(@Body() problemData: any) {
        return this.problemsService.create(problemData);
    }

    @Get()
    async findAll() {
        return this.problemsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.problemsService.findById(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateData: any) {
        return this.problemsService.update(id, updateData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.problemsService.delete(id);
    }
}
