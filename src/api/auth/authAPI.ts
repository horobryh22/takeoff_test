import { instance } from 'api/config';
import { AuthResponseType } from 'api/types';
import { ValuesFormType } from 'types';

export const authAPI = {
    register: (userData: ValuesFormType) => {
        return instance.post<AuthResponseType>('/register', userData);
    },
    login: (userData: ValuesFormType) => {
        return instance.post<AuthResponseType>('/login', userData);
    },
};
