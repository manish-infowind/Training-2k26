import { UserService } from 'src/user/user.service';
import { RegisterUser } from './dto/RegisterUserDto';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    RegisterUser(Registers: RegisterUser): Promise<{
        message: string;
    }>;
}
