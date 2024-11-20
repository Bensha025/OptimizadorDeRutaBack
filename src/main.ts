import { App } from "./app";
import { envs } from "./config/env";


const main = async () => {
    new App(envs.port).start();
}


(async ()=> {
    await main();
})();