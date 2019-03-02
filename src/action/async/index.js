import {Events} from '../event';
import URL from '../url';

/*封装请求体*/
/*注册*/
export const getRegisterAction = (data) =>{
    return {
        todo: Events.REGISTER,
        data: {
            data: data,
            url: AXIOS_URL[Events.REGISTER]
        }
    }
};

export const getLoginAction = (data) =>{
    return {
        todo: Events.LOGIN,
        data: {
            data: data,
            url: AXIOS_URL[Events.LOGIN]
        }
    }
};

/*异步请求地址*/
const AXIOS_URL = {
    'REGISTER': URL + '/user/register',
    'LOGIN': URL + '/user/login'
};