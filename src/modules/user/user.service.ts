import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { ResponseUtility } from 'src/utils/response.utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: User) {
    const result = await this.userRepository.create(user);
    return new ResponseUtility().setData('user', result).setStatus(true);
  }
}
