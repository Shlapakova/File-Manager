import { userInfo } from 'os';

export const usernameInfo = () => {
    console.log(userInfo().username);
};
