import { UpdatePasswordDto } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDto = {
  lastPassword: '123test',
  newPassword: '123456789',
};

export const updatePasswordInvalidMock: UpdatePasswordDto = {
  lastPassword: '123teste',
  newPassword: '1234567890',
};
