/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { Role } from 'src/modules/auth/roles/roles.enum';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UsersService } from 'src/modules/users/users.service';

// @ApiBearerAuth() // Yêu cầu Swagger sử dụng Bearer Token cho tất cả API trong controller này
@Controller('users')
// @UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  //   @Roles(Role.ADMIN)
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.userService.findAll(paginationDto);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findById(+id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 201, description: 'User deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
