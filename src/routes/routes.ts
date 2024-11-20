import { Router } from "express";
import { helloWorld } from "../controllers/example/hello-world";
import { adminUser } from "../controllers/usuarios/usuarios";



export class Routes {

    static get routes(): Router {
        const router = Router();

        router.get("/hello-world", helloWorld)
        router.post("/crear-admin", adminUser)

        
        return router;
    }

}