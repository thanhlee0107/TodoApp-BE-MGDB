import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '../schema/todo.schema';
import { CreateTodoDto } from './dto/CreateTodo.dto';
import { UpdateTodoDto } from './dto/UpdateTodo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  create(@Body() data: CreateTodoDto) {
    return this.todoService.create(data);
  }
  @Get()
  findAll() {
    return this.todoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateTodoDto) {
    return this.todoService.update(id, data);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
