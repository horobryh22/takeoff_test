import { AuthResponseType } from 'api/types';

export const setValueToLocalStorage = (payload: AuthResponseType | string): void => {
    if (!payload) return;

    if (typeof payload === 'string') return;

    if ('accessToken' in payload) {
        window.localStorage.setItem('token', payload.accessToken!);
    }
};
