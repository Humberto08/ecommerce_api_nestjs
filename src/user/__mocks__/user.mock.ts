import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '11111111111',
  email: 'JtHb7@example.com',
  phone: '11999999999',
  id: 43424,
  name: 'Name Test Mock',
  password: '$2b$10$FKchBvTosQubwJPYa5fZh.25qi3uCcbcn/j4Ipd5DwRWbu4vn/StS',
  typeUser: UserType.User,
  createdAt: new Date(),
  updatedAt: new Date(),
};
