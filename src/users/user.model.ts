import { Column, DataType, Model, Table } from 'sequelize-typescript';

type UserCreationAttrs = {
  username: string;
  password: string;
};

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  email: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  username: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
}
