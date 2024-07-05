import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QueuesService } from './queues.service';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';

@Controller('queues')
export class QueuesController {
  constructor(private readonly queueService: QueuesService) {}

  @Post()
  create(@Body() createQueueDto: CreateQueueDto) {
    return this.queueService.create(createQueueDto);
  }

  @Get()
  findAll() {
    return this.queueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQueueDto: UpdateQueueDto) {
    return this.queueService.update(+id, updateQueueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queueService.remove(+id);
  }
}
