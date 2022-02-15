const environments = {};

environments.dev = {
    name: 'Server',
    envName: 'dev',
    httpPort: 3001,
    defaultLang: 'en',
    cacheTime: {
        default: 10,
        css: 100,
        js: 100,
    },
    password: 'demo-password',
};

environments.production = {
    name: 'Serveris',
    envName: 'production',
    httpPort: 4000,
    defaultLang: 'lt',
    cacheTime: {
        default: 1000,
        css: 10000,
        js: 10000,
    },
    password: 'hjfskdjflsak'
};

environments.test = {
    name: 'server',
    envName: 'test',
    httpPort: 5000,
    defaultLang: 'en',
    cacheTime: {
        default: 100,
        css: 100,
        js: 100,
    },
    password: 'hjfsak'
};

// console.log(process.env.NODE_ENV);

const currectEnv = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : '';
const exportableEnvName = typeof environments[currectEnv] === 'object' ? currectEnv : 'dev';


// console.log(currentEnv);


// NODE_ENV=production node . -> environments.production
// NODE_ENV=dev node . -> environments.dev
// NODE_ENV=kjsdj node . -> environments.dev
// node . -> environments.dev

export default environments[exportableEnvName];