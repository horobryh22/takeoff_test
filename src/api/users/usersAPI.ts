import { v4 } from 'uuid';

import { instance } from 'api/config';
import { UserType } from 'api/types';
import { UserDataValues } from 'types';

export const usersAPI = {
    fetchUsers: (value: string) => {
        return instance.get<UserType[]>('/users', {
            params: {
                q: value,
            },
        });
    },
    createUser: (userData: UserDataValues) => {
        const id = v4();

        const { firstName, lastName, phone, email } = userData;

        return instance.post<UserType>('/users', {
            id,
            firstName,
            lastName,
            phone,
            email,
        });
    },
    deleteUser: (id: number) => {
        return instance.delete(`/users/${id}`);
    },
};
