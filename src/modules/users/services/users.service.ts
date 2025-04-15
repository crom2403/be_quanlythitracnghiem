import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dtos';
import { PaginationResult } from 'src/common/interfaces';
import { User, Role } from '../entities';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  // Mã hóa password
  public async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // Số vòng salt
    return await bcrypt.hash(password, saltRounds);
  }

  async findByStudentCode(student_code: string): Promise<User> {
    return this.userRepository.findOne({
      where: { student_code },
      relations: ['role'],
    });
  }

  async findAll(paginationDto: PaginationDto): Promise<PaginationResult<User>> {
    const { page, limit, role_name } = paginationDto;
    const skip = (page - 1) * limit;
    const where = {};
    if (role_name) {
      where['role'] = {
        name: role_name,
      };
    }
    const [items, total] = await this.userRepository.findAndCount({
      skip,
      take: limit,
      order: {
        id: 'DESC',
      },
      where,
      relations: ['role'],
    });

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      // select: ['id', 'student_code', 'email', 'gender', 'fullname', 'birthday'],
      relations: ['role'],
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    } else {
      console.log(user);
      return user;
    }
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { student_code: createUserDto.student_code },
    });

    if (existingUser) {
      throw new Error('Mã sinh viên đã tồn tại');
    }

    // Get the role entity
    const role = await this.roleRepository.findOne({
      where: { name: createUserDto.role },
    });

    if (!role) {
      throw new Error('Role not found');
    }

    const hashedPassword = await this.hashPassword(createUserDto.password);

    // Create user with proper type conversion
    const user = this.userRepository.create({
      student_code: createUserDto.student_code,
      email: createUserDto.email,
      fullname: createUserDto.fullname,
      gender: createUserDto.gender as 'Nam' | 'Nữ',
      birthday: createUserDto.birthday,
      password: hashedPassword,
      status: createUserDto.status,
      role: role,
    });

    return this.userRepository.save(user);
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    await this.userRepository.update({ id }, data);
    return this.userRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<string> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    } else {
      return `User with Id ${id} deleted successfully`;
    }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
}
