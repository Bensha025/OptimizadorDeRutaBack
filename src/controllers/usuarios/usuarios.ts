
import { collection, addDoc, query, where, getDocs} from 'firebase/firestore';
import { db } from "../../db/db";
import { Request, Response } from 'express';

interface UserData {
    nombre: string;
    apellido: String;
    correo: string;
}

interface DriverData {
    nombre: string;
    apellido: String;
    correo: string;
    telefono: number;
    carro: string;
    modelo: string;
}

export async function adminUser(req: Request, res: Response){ 
    
    try {
        const docRef = await addDoc(collection(db, "administrador"), req.body);
        console.log("Usuario guardado con ID: ", docRef.id);
        
        res.json({id: docRef.id})
    } catch (error) {
        console.error("Error al guardar los datos: ", error);
        
        res.json({ error })
    }

}

export async function validarCorreoAdmin(req: Request, res: Response){ 
    const q = query(collection(db, "administrador"), where ("correo", "==", req.body.correo));

    const consulta = await getDocs(q);
    

    !consulta.empty ? res.json({ msg: "Existe", exists: true }) : res.json({ msg: "No existe", exists: false })
    

}

export async function driverUser(req: Request, res: Response){ 
    
    try {
        const docRef = await addDoc(collection(db, "driver"), req.body);
        console.log("Usuario guardado con ID: ", docRef.id);
        alert("Usuario guardado con éxito");
    } catch (error) {
        console.error("Error al guardar los datos: ", error);
        alert("Error al guardar usuario");
    }
}

export async function validarCorreoDriver(req: Request, res: Response){ 
    const q = query(collection(db,"driver"), where ("correo", "==", req.body.correo));

    const consulta = await getDocs(q);

    return !consulta.empty ? 1 : 0;
}
