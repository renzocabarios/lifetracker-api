import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type UserDocument = User & Document;

@Schema()
class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ default: false })
  deleted: boolean;
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema, UserDocument, User };
