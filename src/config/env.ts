import 'dotenv/config'

export const envs = {
    port: +process.env.PORT! || 3001,
    apiKey: process.env.APIKEY!,
    authDomain: process.env.AUTHDOMAIN!,
    projectId: process.env.PROJECTID!,
    storageBucket: process.env.STORAGEBUCKET!,
    messagingSenderId: process.env.MESSAGINGSENDERID!,
    appId: process.env.APPID!,
    measurementId: process.env.MEASUREMENTID!,
}