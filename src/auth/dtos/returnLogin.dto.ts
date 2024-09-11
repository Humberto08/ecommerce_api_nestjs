import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';

export interface ReturnLogin {
  accessToken: string;
  user: ReturnUserDto;
}
