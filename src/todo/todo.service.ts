import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from '../schema/todo.schema';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateTodoDto } from './dto/CreateTodo.dto';
import { UpdateTodoDto } from './dto/UpdateTodo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}
  async create(data: CreateTodoDto): Promise<Todo> {
    const todoData = {
      ...data,
      status: 'To-do', // nếu không có status thì dùng "To-do"
    };
    return new this.todoModel(todoData).save();
  }
  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }
  async findOne(id: string): Promise<Todo | null> {
    // console.log(`Finding todo with id: ${id}`);
    const foundOne = await this.todoModel.findById(id).exec();
    if (!foundOne) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    console.log([foundOne]);
    return foundOne;
  }
  async update(id: string, data: UpdateTodoDto): Promise<Todo | null> {
    const updated = await this.todoModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return updated;
  }
  async delete(id: string): Promise<Todo | null> {
    const deleted = await this.todoModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return deleted;
  }
}
