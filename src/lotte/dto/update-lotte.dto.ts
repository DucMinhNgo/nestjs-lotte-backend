import { PartialType } from '@nestjs/mapped-types';
import { CreateLotteDto } from './create-lotte.dto';

export class UpdateLotteDto extends PartialType(CreateLotteDto) {}
