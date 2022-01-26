const environments = {};

environments.dev = {
    name: 'Server',
    envName: 'dev',
    httpPort: 3001,
    defaultLang: 'en',
    password: 'demo-password'
};

environments.production = {
    name: 'Serveris',
    envName: 'production',
    httpPort: 4000,
    defaultLang: 'lt',
    password: 'hjfskdjflsak'
};

environments.test = {
    name: 'server',
    envName: 'test',
    httpPort: 5000,
    defaultLang: 'en',
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

module.exports = environments[exportableEnvName];