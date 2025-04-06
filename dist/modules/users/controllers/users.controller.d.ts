import { PaginationDto } from 'src/common/dtos';
import { CreateUserDto } from '../dtos';
import { UsersService } from '../services';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(paginationDto: PaginationDto): Promise<import("../../../common").PaginationResult<import("..").User>>;
    findOne(id: string): Promise<import("..").User>;
    create(createUserDto: CreateUserDto): Promise<import("..").User>;
    remove(id: string): Promise<string>;
}
