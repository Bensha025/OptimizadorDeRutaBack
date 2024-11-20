import { App } from "./app";


const main = async () => {
    new App(3000).start();
}


(async ()=> {
    await main();
})();