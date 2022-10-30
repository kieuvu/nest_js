import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

export class UserRepository extends Repository<User> {}
