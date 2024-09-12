import { LoginPayload } from 'src/auth/dtos/loginPayload.dto';

export const authorizantionToLoginPayload = (
  authorization: string,
): LoginPayload | undefined => {
  const authorizatioSlited = authorization.split('.');

  if (authorizatioSlited.length < 3 || !authorizatioSlited[1]) {
    return undefined;
  }

  return JSON.parse(
    Buffer.from(authorizatioSlited[1], 'base64').toString('ascii'),
  );
};
