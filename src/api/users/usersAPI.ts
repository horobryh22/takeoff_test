import { v4 } from 'uuid';

import { instance } from 'api/config';
import { UserType } from 'api/types';
import { UserDataValues } from 'types';

export const usersAPI = {
    fetchUsers: (value: string) => {
        return instance.get<UserType[]>('/contacts', {
            params: {
                q: value,
            },
        });
    },
    createUser: (userData: UserDataValues) => {
        const id = v4();

        const { firstName, lastName, phone, email } = userData;

        return instance.post<UserType>('/contacts', {
            id,
            firstName,
            lastName,
            phone,
            email,
        });
    },
    deleteUser: (id: number) => {
        return instance.delete(`/contacts/${id}`);
    },
    updateUser: (id: number, userData: UserDataValues) => {
        return instance.put(`/contacts/${id}`, userData);
    },
};
