import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './User.service';
import { BaseUserDto, PartialUserDto } from './dto';
import { ResponseService } from 'src/services';
import { User } from './entities';

@Controller(User.name)
export class UserController {
  constructor(
    private readonly service: UserService,
    private readonly response: ResponseService,
  ) {}

  @Post()
  async create(@Body() dto: BaseUserDto) {
    const data = await this.service.create(dto);
    return this.response.createSuccess(User.name, [data]);
  }

  @Get()
  async findAll() {
    const data = await this.service.findAll();
    return this.response.fetchSuccess(User.name, data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.service.findOne(id);
    return this.response.fetchSuccess(User.name, [data]);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: PartialUserDto) {
    const data = await this.service.update(id, dto);
    return this.response.updateSuccess(User.name, [data]);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.service.remove(id);
    return this.response.removeSuccess(User.name, [data]);
  }
}
