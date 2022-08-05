import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export default class UserService {
  constructor(
    @InjectModel(UserModel) private userRepository: typeof UserModel,
  ) {}

  async createUser(user: CreateUserDto) {
    return await this.userRepository.create(user);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async findByUsername(username: string) {
    return await this.userRepository.findOne({ where: { username } });
  }
}
