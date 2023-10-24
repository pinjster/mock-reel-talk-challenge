import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"

function signUp(username: string, password: string){
    createUserWithEmailAndPassword(auth, username, password)
}