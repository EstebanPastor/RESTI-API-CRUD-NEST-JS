import { TaskStatus } from '../task.entity';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CreateTaskDto {
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  title: string;

  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateTaskDto {
  @MinLength(3)
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  description?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status?: TaskStatus;
}
