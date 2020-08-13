import { loginAfter2Seconds } from '../mockApi';

export const LOGINACTION = 'LOGINACTION';

export function fetchLogin() {
    return async (dispatch) => {
        const result = await loginAfter2Seconds();
        dispatch({
            type: LOGINACTION,
            payload: result
        });
    };
}
