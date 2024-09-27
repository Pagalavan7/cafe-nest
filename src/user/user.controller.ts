import { Body, Controller, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupUserDTO } from './DTO/signupUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  signup(@Body() signupData: SignupUserDTO) {
    console.log(typeof signupData);
    return this.userService.signup(signupData);
  }
}
