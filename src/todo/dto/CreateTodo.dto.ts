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
  @IsDateString()
  dateTime?: string;
}
