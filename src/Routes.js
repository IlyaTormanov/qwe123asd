import {stringify} from 'qs';

export const routes={
    SIGN_IN:`http://jobs-api.bostil.ru/api/Users/authenticate`,
    SIGN_UP:'http://jobs-api.bostil.ru/api/Users/register'
}

// export const routeGen=(route,prefix)=>{
//         return `${route}?`
// }