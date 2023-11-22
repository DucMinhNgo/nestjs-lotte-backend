import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LotteService } from './lotte.service';
import { CreateLotteDto } from './dto/create-lotte.dto';
import { UpdateLotteDto } from './dto/update-lotte.dto';

@Controller('lotte')
export class LotteController {
  constructor(private readonly lotteService: LotteService) {}

  @Post()
  create(@Body() createLotteDto: CreateLotteDto) {
    return this.lotteService.create(createLotteDto);
  }

  @Get()
  findAll() {
    return this.lotteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lotteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLotteDto: UpdateLotteDto) {
    return this.lotteService.update(+id, updateLotteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lotteService.remove(+id);
  }
}
