import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PaginationResult } from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Run khi ứng dụng khởi tạo
  async onModuleInit() {
    await this.createDefaultUsers();
  }

  // Mã hóa password
  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // Số vòng salt
    return await bcrypt.hash(password, saltRounds);
  }

  // Tạo user mặc định
  private async createDefaultUsers() {
    const count = await this.userRepository.count();
    if (count === 0) {
      const user = new User();
      user.student_code = 'dh52106677';
      user.full_name = 'Admin';
      user.password = '123456';
      user.email = 'thanhsonrau2002@gmail.com';
      user.birthday = new Date('2002-03-24');
      user.avatar = null;

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
    return this.userRepository.findOne({ where: { id } });
  }

  async create(data: User): Promise<User> {
    return this.userRepository.save(data);
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    await this.userRepository.update({ id }, data);
    return this.userRepository.findOne({ where: { id } });
  }
}
