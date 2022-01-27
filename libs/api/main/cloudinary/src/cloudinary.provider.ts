import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 } from 'cloudinary';

export const CloudinaryProvider: FactoryProvider = {
  provide: 'CLOUDINARY',
  inject: [ConfigService],
  useFactory: (configService: ConfigService): typeof v2 => {
    v2.config({
      cloud_name: configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: configService.get('CLOUDINARY_API_KEY'),
      api_secret: configService.get('CLOUDINARY_API_SECRET'),
      secure: true,
    });
    return v2;
  },
};
