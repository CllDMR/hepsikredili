import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import 'multer';
import toStream = require('buffer-to-stream');

type File = Express.Multer.File;

@Injectable()
export class CloudinaryService {
  private readonly imageFolder: string;
  constructor(private readonly configService: ConfigService) {
    const folderName = this.configService.get<string>('CLOUDINARY_FOLDER_NAME');
    if (!folderName)
      throw new Error('Need env variable CLOUDINARY_FOLDER_NAME');
    this.imageFolder = folderName;
  }

  async uploadImage(
    file: File
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        {
          folder: this.imageFolder,
          format: 'webp',
          transformation: [{ width: 1600, height: 900, crop: 'limit' }],
        },
        (error, result) => {
          if (error) return reject(error);
          if (!result) throw new Error('No cloudinary image upload result');
          resolve(result);
        }
      );

      if (!file)
        throw new BadRequestException(
          "Need file resource in request body as 'file' form-data-paramater"
        );

      toStream(file.buffer).pipe(upload);
    });
  }

  async destroyImage(publicId: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      v2.uploader.destroy(publicId, undefined, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    });
  }
}
