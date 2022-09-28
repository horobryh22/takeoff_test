import { UserType } from 'api/types';

export type AuthStateType = {
    isUserAuth: boolean;
    authUserData: Pick<UserType, 'id' | 'email'>;
};
