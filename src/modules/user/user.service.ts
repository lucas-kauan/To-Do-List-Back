import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { UserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {};

  async create(data: UserDTO){
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    });

    if(userExists) {
      throw new Error("User already exists")
    };

    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }
}
