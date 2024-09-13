import { ReturnUserDto } from '../../user/dtos/returnUser.dto';

export interface ReturnLogin {
  accessToken: string;
  user: ReturnUserDto;
}
