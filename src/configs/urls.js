const baseURL = process.env.REACT_APP_API;

const _refresh='refresh';
const _access='access';

const _urls = {
    users: '/users',
    cars: '/cars',
    auth: {
        logination: '/auth',
        refresh: '/auth/refresh'
    }
};

export {baseURL, _urls,_refresh,_access}