import { Injectable } from '@nestjs/common';
import { STATUS } from 'src/constant';

@Injectable()
export class ResponseService {
  constructor() {}

  fetchSuccess(model: string, data: any[]) {
    return {
      status: STATUS.SUCCESS,
      message: `Successfully fetched ${model}`,
      data,
    };
  }

  createSuccess(model: string, data: any[]) {
    return {
      status: STATUS.SUCCESS,
      message: `Successfully created ${model}`,
      data,
    };
  }

  updateSuccess(model: string, data: any[]) {
    return {
      status: STATUS.SUCCESS,
      message: `Successfully updated ${model}`,
      data,
    };
  }

  removeSuccess(model: string, data: any[]) {
    return {
      status: STATUS.SUCCESS,
      message: `Successfully removed ${model}`,
      data,
    };
  }
}
