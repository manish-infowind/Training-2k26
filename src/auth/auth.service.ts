import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUser } from './dto/RegisterUserDto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

constructor(private readonly userService:UserService){}

 async RegisterUser(Registers:RegisterUser){
    const saltRound=10;
const hash = await bcrypt.hash(Registers.password ,saltRound)
    
    return this.userService.createUser({...Registers,password:hash}) //Override  


}
  

}
