import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UsersService } from './user.service';
import { ResponseUtility } from 'src/utils/response.utils';
import { ValidationError } from 'class-validator';

@Controller('api')
export class UserController {
  constructor(private userService: UsersService) {}

  @UsePipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const errorMessages = {};
        errors.forEach((error) => {
          errorMessages[error.property] = Object.values(error.constraints)
            .join('. ')
            .trim();
        });
        return new BadRequestException(errorMessages);
      },
      // exceptionFactory: (validationErrors: ValidationError[] = []) => {
      //   return new BadRequestException(validationErrors);
      // },
      transform: true,
    }),
  )
  @Post('register')
  async register(@Body() data: User) {
    const response: ResponseUtility = await this.userService.createUser(data);
    if (response.getStatus()) {
      return new ResponseUtility()
        .setData('user', response.getData().user)
        .setStatus(true);
    } else {
      return new ResponseUtility()
        .setData('errors', response.getData())
        .setStatus(false);
    }
  }
}
