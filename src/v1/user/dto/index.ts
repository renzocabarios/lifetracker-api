import { PartialType } from '@nestjs/mapped-types';

export class BaseUserDto {
  firstName: string;
  lastName: string;
  deleted: boolean;
}

export class PartialUserDto extends PartialType(BaseUserDto) {}
