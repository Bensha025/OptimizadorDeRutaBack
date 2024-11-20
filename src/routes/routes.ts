import { Router } from "express";
import { helloWorld } from "../controllers/example/hello-world";



export class Routes {

    static get routes(): Router {
        const router = Router();

        router.get("/hello-world", helloWorld)

        return router;
    }

}