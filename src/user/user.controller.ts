import { Body, Controller, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup/:id')
  signup(
    @Body('name') body: any,
    @Body('email') email: any,
    @Param('id') params: any,
  ) {
    console.log(params);
    console.log(body);
    console.log(email);
    return this.userService.signup();
  }
}
