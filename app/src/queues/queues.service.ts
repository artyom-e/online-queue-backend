import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from './entities/queue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QueuesService {
  constructor(
    @InjectRepository(Queue) private repo: Repository<Queue>
  ) {}

  async create(createQueueDto: CreateQueueDto): Promise<Queue> {
    const queue = this.repo.create(createQueueDto);
    
    return this.repo.save(queue);
  }

  async findAll(): Promise<Queue[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Queue> {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, updateQueueDto: UpdateQueueDto): Promise<Queue> {
    const queue = await this.findOne(id);
    if(!queue) {
      throw new NotFoundException('Queue not found');
    }
    Object.assign(queue, updateQueueDto);

    return this.repo.save(queue);
  }

  async remove(id: number): Promise<void> {
    this.repo.delete(id);
  }
}
