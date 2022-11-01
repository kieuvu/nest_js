import { Entity, Column, Unique } from 'typeorm';

import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { EntityAbstract } from 'src/entities/entity.abstract';

@Entity({ name: 'users' })
export class User extends EntityAbstract {
  @Column({ nullable: false })
  @Unique(['email'])
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Column({ nullable: false })
  username: string;

  @Length(8)
  @IsNotEmpty()
  @IsString()
  @Column({ nullable: false })
  password: string;
}
