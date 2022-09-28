import { UserType } from 'api/types/users/UserType';

export type AuthResponseType = {
    accessToken: string;
    user: Pick<UserType, 'email' | 'id'>;
};
