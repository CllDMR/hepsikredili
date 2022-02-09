import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Error } from 'mongoose';
import ValidationError = Error.ValidationError;

@Catch(ValidationError)
export class ValidationErrorFilter implements ExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    response.status(400).json({
      statusCode: 400,
      message: Object.values(exception.errors).map((e) => e.message),
      error: 'ValidationError',
    });
  }
}
