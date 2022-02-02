import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Error } from 'mongoose';
import CastError = Error.CastError;

@Catch(CastError)
export class CastErrorFilter implements ExceptionFilter {
  catch(exception: CastError, host: ArgumentsHost) {
    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    response.status(400).json({
      statusCode: 400,
      message: [exception.message],
      error: 'CastError',
    });
  }
}
