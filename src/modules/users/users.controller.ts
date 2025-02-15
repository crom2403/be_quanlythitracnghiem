/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import {
  JwtAuthGuard,
  RolesGuard,
} from 'src/modules/auth/grards/jwt-auth.guard';
import { Role } from 'src/modules/auth/roles/roles.enum';
import { UsersService } from 'src/modules/users/users.service';

@Controller('users')
// @UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  //   @Roles(Role.ADMIN)
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.userService.findAll(paginationDto);
  }
}
