import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '11111111111',
  email: 'JtHb7@example.com',
  phone: '11999999999',
  id: 43424,
  name: 'Name Test Mock',
  password: '123456789',
  typeUser: UserType.User,
  createdAt: new Date(),
  updatedAt: new Date(),
  
};
