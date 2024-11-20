import {initializeApp,} from 'firebase/app';
import {getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { envs } from '../config/env';

const firebaseConfig = {
    apiKey: envs.apiKey,
    authDomain: envs.authDomain,
    projectId: envs.projectId,
    storageBucket: envs.storageBucket,
    messagingSenderId: envs.messagingSenderId,
    appId: envs.appId,
    measurementId: envs.measurementId
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };