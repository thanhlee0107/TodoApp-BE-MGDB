import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './CreateTodo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
