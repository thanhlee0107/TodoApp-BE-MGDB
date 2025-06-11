import {
  IsString,
  IsOptional,
  IsIn,
  IsNotEmpty,
  IsDateString,
} from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsIn(['To-do', 'In Progress', 'Done'])
  status?: string;
  @IsOptional()
  @IsDateString()
  dateTime?: string;
}
