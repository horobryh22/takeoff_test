import { instance } from 'api/config';
import { UserType } from 'api/types';

export const usersAPI = {
    fetchUsers: (value: string) => {
        return instance.get<UserType[]>('/users', {
            params: {
                q: value,
            },
        });
    },
};
