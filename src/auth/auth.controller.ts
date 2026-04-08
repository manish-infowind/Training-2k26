import { Controller , Body ,Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUser } from './dto/RegisterUserDto';

@Controller('auth')
export class AuthController {

    // constructor(authservice : AuthService){
    //     this.authService=authservice;
    // }

    constructor(private readonly authservice : AuthService){}

    @Post("/register")
    getUser(@Body() RegisterUserDto : RegisterUser){
// return { message:"This is Auth Controller "}
return this.authservice.RegisterUser(RegisterUserDto)

} 
}
