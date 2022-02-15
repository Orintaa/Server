
import { server } from './lib/server.js';
/*
jeigu kodas pasileidzia is programuotojo pc, tai:
[projekto pavadinimas] [aplinkos pavadinimas] [default kalba]

jeigu kodas pasileidzia is programuotojo pc, tai:
server dev en

jeigu kodas pasileidzia is programuotojo pc, tai:
serveris production lt
*/

// console.log(config);
// console.log(config.name, config.envName, config.defaultLang);

const app = {};

app.init = () => {
    console.log('paleidineju programa...');
    //pasiruosti pradinius folderius
    //(- ./data
    //- ./data/users
    //- ./data/images
    //- ./data/ads
    //- ./data/pdf
    //- ./data/uploads
    //- ./data/uploads/user
    //- ./data/uploads/admin
    //- ./data/uploads/sellers) => cia tik pvz

    //pasiruosti pradinius failus

    //prisijungimas prie DB (duomenu baze)

    //uzkurti pati serveri (musu programa)
    server.init();

    //reguliariu procesu paleidimas:
    //-istrinti senus/nebereikalingus failus
    //-atsinaujinti informacija per/is API (pvz. valiutu kursai)
};

app.init();

export { app };