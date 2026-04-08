import { AuthService } from './auth.service';
import { RegisterUser } from './dto/RegisterUserDto';
export declare class AuthController {
    private readonly authservice;
    constructor(authservice: AuthService);
    getUser(RegisterUserDto: RegisterUser): Promise<{
        message: string;
    }>;
}
