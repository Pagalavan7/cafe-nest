import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  signup() {
    console.log('user service called');
    return 'user service called';
  }
}
