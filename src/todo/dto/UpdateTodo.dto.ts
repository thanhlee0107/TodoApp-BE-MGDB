import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './CreateTodo.dto';
import { IsOptional, IsIn } from 'class-validator';
export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsOptional()
  @IsIn(['To-do', 'In Progress', 'Done'])
  status?: string;
}
