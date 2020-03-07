import {stringify} from 'qs';

export const routes={
    SIGN_IN:`http://jobs-api.bostil.ru/api/Users/authenticate`,
    SIGN_UP:'http://jobs-api.bostil.ru/api/Users/register',
    ALL_COMPANY:'http://jobs-api.bostil.ru/api/Company/api/Company/GetAll',
    TECHNOLOGIES:'http://jobs-api.bostil.ru/api/Tech',
    COMPANY:'http://jobs-api.bostil.ru/api/Company/api/Company/Get'
}

// export const routeGen=(route,prefix)=>{
//         return `${route}?`
// }
