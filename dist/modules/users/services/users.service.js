"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../entities");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userRepository, roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    async onModuleInit() {
        await this.createDefaultRoles();
        await this.createDefaultUsers();
    }
    async hashPassword(password) {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }
    async createDefaultRoles() {
        const count = await this.roleRepository.count();
        if (count === 0) {
            const roles = ['admin', 'teacher', 'student'];
            for (const roleName of roles) {
                const role = new entities_1.Role();
                role.name = roleName;
                await this.roleRepository.save(role);
            }
        }
    }
    async createDefaultUsers() {
        const count = await this.userRepository.count();
        if (count === 0) {
            const adminRole = await this.roleRepository.findOne({
                where: { name: 'admin' },
            });
            if (!adminRole) {
                throw new Error('Admin role not found');
            }
            const user = new entities_1.User();
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
    async findByStudentCode(student_code) {
        return this.userRepository.findOneBy({ student_code });
    }
    async findAll(paginationDto) {
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
    async findById(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['role'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        else {
            console.log(user);
            return user;
        }
    }
    async create(createUserDto) {
        const existingUser = await this.userRepository.findOne({
            where: { student_code: createUserDto.student_code },
        });
        if (existingUser) {
            throw new Error('Mã sinh viên đã tồn tại');
        }
        const role = await this.roleRepository.findOne({
            where: { name: createUserDto.role },
        });
        if (!role) {
            throw new Error('Role not found');
        }
        const hashedPassword = await this.hashPassword(createUserDto.password);
        const user = this.userRepository.create({
            student_code: createUserDto.student_code,
            email: createUserDto.email,
            fullname: createUserDto.fullname,
            gender: createUserDto.gender,
            birthday: createUserDto.birthday,
            password: hashedPassword,
            status: createUserDto.status,
            role: role,
        });
        return this.userRepository.save(user);
    }
    async update(id, data) {
        await this.userRepository.update({ id }, data);
        return this.userRepository.findOne({ where: { id } });
    }
    async remove(id) {
        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        else {
            return `User with Id ${id} deleted successfully`;
        }
    }
    async findByEmail(email) {
        return this.userRepository.findOne({ where: { email } });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map