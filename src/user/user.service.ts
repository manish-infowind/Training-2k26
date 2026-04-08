import { Injectable } from '@nestjs/common';
import { RegisterUser } from '../auth/dto/RegisterUserDto';

@Injectable()
export class UserService {

    createUser(RegisterUser : RegisterUser ){
               console.log("Registers "+RegisterUser.fname)
                        console.log("Registers "+RegisterUser.lname)
                                console.log("Registers "+RegisterUser.password)
                console.log("Registers "+RegisterUser.email)
                                return {message : "User Created "}
    }
}
