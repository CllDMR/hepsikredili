import { CloudinaryService } from '@hepsikredili/api/main/cloudinary';
import {
  CheckPolicies,
  CreateMembershipAccountImagePolicyHandler,
  DeleteMembershipAccountImagePolicyHandler,
  JwtAuthGuard,
  PoliciesMembershipGuard,
  ReadMembershipAccountImagePolicyHandler,
} from '@hepsikredili/api/main/shared';
import { ValidateMongooseObjectIdPipe } from '@hepsikredili/api/shared';
import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ApiMainAccountImageService } from '../services/account-image.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/images')
export class ApiMainAccountImageController {
  constructor(
    private readonly accountImageService: ApiMainAccountImageService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  @CheckPolicies(new ReadMembershipAccountImagePolicyHandler())
  @Get()
  findAll(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountIdParam: string
  ) {
    return this.accountImageService.findAll(accountIdParam);
  }

  @CheckPolicies(new ReadMembershipAccountImagePolicyHandler())
  @Get(`:id`)
  async findOne(
    @Param('id', ValidateMongooseObjectIdPipe) imageIdParam: string
  ) {
    const image = await this.accountImageService.findOneById(imageIdParam);
    if (!image) throw new BadRequestException('Resource could not found');
    return image;
  }

  @CheckPolicies(new CreateMembershipAccountImagePolicyHandler())
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Param('accountId', ValidateMongooseObjectIdPipe) accountIdParam: string
  ) {
    const image = await this.cloudinaryService.uploadImage(file);

    return this.accountImageService.create({
      url: image.secure_url,
      cloudinaryId: image.public_id,
      owner: accountIdParam,
    });
  }

  @CheckPolicies(new DeleteMembershipAccountImagePolicyHandler())
  @Delete(`:id`)
  async remove(
    @Param('id', ValidateMongooseObjectIdPipe) imageIdParam: string
  ) {
    const image = await this.accountImageService.findOneById(imageIdParam);
    if (!image) throw new BadRequestException('Resource could not found');
    await this.cloudinaryService.destroyImage(image.cloudinaryId);
    return this.accountImageService.remove(image._id);
  }
}
