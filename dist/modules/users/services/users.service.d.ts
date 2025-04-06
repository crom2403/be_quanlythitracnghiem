import { PaginationDto } from 'src/common/dtos';
import { PaginationResult } from 'src/common/interfaces';
import { User, Role } from '../entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos';
export declare class UsersService {
    private userRepository;
    private roleRepository;
    constructor(userRepository: Repository<User>, roleRepository: Repository<Role>);
    onModuleInit(): Promise<void>;
    private hashPassword;
    private createDefaultRoles;
    private createDefaultUsers;
    findByStudentCode(student_code: string): Promise<User>;
    findAll(paginationDto: PaginationDto): Promise<PaginationResult<User>>;
    findById(id: number): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(id: number, data: Partial<User>): Promise<User>;
    remove(id: string): Promise<string>;
    findByEmail(email: string): Promise<User | undefined>;
}
