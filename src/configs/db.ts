import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../users/user.model';

export default function () {
  return SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    models: [UserModel],
    autoLoadModels: true,
  });
}
