import express, { json } from 'express';
import { Routes } from './routes/routes';


export class App {
    
    constructor(
        public readonly port:number
    ){}

    start(){
        const app = express();
        app.use(json());
        app.use( express.urlencoded({ extended: true }) );

        app.use(Routes.routes)


        app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
        });
    }

}
