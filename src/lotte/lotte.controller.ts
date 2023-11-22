import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { LotteService } from './lotte.service';
import { CreateLotteDto } from './dto/create-lotte.dto';
import { UpdateLotteDto } from './dto/update-lotte.dto';
import { Request } from 'express';
import { IpAddress } from '../decorators/ip-address';
import * as UAParser from 'ua-parser-js';
import { RealIP } from 'nestjs-real-ip';

@Controller('lotte')
export class LotteController {
  constructor(private readonly lotteService: LotteService) { }

  @Post()
  create(@Body() createLotteDto: CreateLotteDto) {
    return this.lotteService.create(createLotteDto);
  }

  @Get()
  findAll(@Req() request: Request, @RealIP() ip: string, @IpAddress() ipAddress) {
    const userAgent = request.headers['user-agent'];
    console.log('User Agent:', userAgent);
    console.log(request.headers);
    console.log({ ip });
    console.log({ ipAddress });


    // Use ua-parser-js to parse User-Agent header
    const parser = new UAParser(userAgent);
    const deviceInfo = parser.getResult();

    // Accessing browser information
    // const browserName = deviceInfo.browser.name;
    // const browserVersion = deviceInfo.browser.version;

    // Accessing device information
    // const deviceType = deviceInfo.device.type;

    console.log({ deviceInfo });

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
