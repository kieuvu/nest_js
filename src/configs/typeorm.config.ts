import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

const entities = [User];

const port: number = parseInt(process.env.DB_HOST);
const host: string = process.env.DB_HOST;
const username: string = process.env.DB_USERNAME;
const password: string = process.env.DB_PASSWORD;
const database: string = process.env.DB_DATABASE;

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: host || 'localhost',
  port: port || 3306,
  username: username || 'root',
  password: password || '',
  database: database || 'database',
  synchronize: true,
  entities: entities,
};
