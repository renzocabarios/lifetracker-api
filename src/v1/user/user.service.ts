import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseService } from 'src/services/response/response/response.service';
import { BaseUserDto, PartialUserDto } from './dto';
import { User, UserDocument } from './entities';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  // TODO: ADD TRANSACTION
  async create(dto: BaseUserDto) {
    return await new this.model(dto).save();
  }

  async findAll() {
    return await this.model.find({ deleted: false }).exec();
  }

  async findOne(_id: string) {
    return await this.model.findOne({ deleted: false, _id }).exec();
  }

  // TODO: ADD TRANSACTION
  async update(_id: string, dto: PartialUserDto) {
    return await this.model
      .findOneAndUpdate({ _id }, dto, { new: true })
      .exec();
  }

  // TODO: ADD TRANSACTION
  async remove(_id: string) {
    return await this.model
      .findOneAndUpdate({ _id }, { deleted: true }, { new: true })
      .exec();
  }
}
