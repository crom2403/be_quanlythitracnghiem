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

  // Run khi ứng dụng khởi tạo
  async onModuleInit() {
    await this.createDefaultRoles();
    await this.createDefaultUsers();
  }

  // Mã hóa password
  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // Số vòng salt
    return await bcrypt.hash(password, saltRounds);
  }
  // Tạo Role Default
  private async createDefaultRoles() {
    const count = await this.roleRepository.count();
    if (count === 0) {
      const roles = ['admin', 'teacher', 'student'];
      for (const roleName of roles) {
        const role = new Role();
        role.name = roleName;
        await this.roleRepository.save(role);
      }
    }
  }

  // Tạo User Default
  private async createDefaultUsers() {
    const count = await this.userRepository.count();
    if (count === 0) {
      // First, get the admin role
      const adminRole = await this.roleRepository.findOne({
        where: { name: 'admin' },
      });

      if (!adminRole) {
        throw new Error('Admin role not found');
      }

      const user = new User();
      user.student_code = 'dh52106677';
      user.fullname = 'Admin';
      user.password = '123456';
      user.email = 'thanhsonrau2002@gmail.com';
      user.birthday = new Date('2002-03-24');
      user.avatar = null;
      user.role = adminRole;

      user.password = await this.hashPassword(user.password);

      await this.userRepository.save(user);
      console.log('Default user created');
    }
  }

  async findByStudentCode(student_code: string): Promise<User> {
    return this.userRepository.findOneBy({ student_code });
  }

  async findAll(paginationDto: PaginationDto): Promise<PaginationResult<User>> {
    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await this.userRepository.findAndCount({
      skip,
      take: limit,
      order: {
        id: 'DESC',
      },
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
      birthday: new Date(createUserDto.birthday),
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
