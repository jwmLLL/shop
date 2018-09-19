const isProd = false;
const env = isProd ? 'prod' : 'beta';

const serviceConfig = {
    beta: {
        API_SERVER: 'http://192.168.92.47:8080',
    },
    prod: {
        API_SERVER: 'https://api.xiuwu.me',
       
    }
}

const config = {
    isProd,
    APP_NAME: 'shop',
    API_SERVER: serviceConfig[env].API_SERVER,
    VERSION: '1.0.0'
}

export default config;