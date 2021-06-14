import firebase from "firebase/app"
import "firebase/auth"
//Se for testar colocar as paradas do Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyArk-j7co0Z6ZDHjiS4Cvbd7YsrEv9o3CI",
    authDomain: "teste-d0228.firebaseapp.com",
    projectId: "teste-d0228",
    storageBucket: "teste-d0228.appspot.com",
    messagingSenderId: "936187177312",
    appId: "1:936187177312:web:8e541d3b20351f7a70d605",
    measurementId: "G-01DH9RYKF5"
})

export const auth = app.auth()
export default app