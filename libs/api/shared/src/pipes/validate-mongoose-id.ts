import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ValidateMongooseObjectIdPipe
  implements PipeTransform<string, string>
{
  transform(value: string, metaData: ArgumentMetadata) {
    if (!Types.ObjectId.isValid(value))
      throw new BadRequestException(
        `${metaData.data} parameter needs to be Mongoose ObjectId`
      );
    return value;
  }
}
