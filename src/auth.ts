import { auth } from "./index";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as signOutFB } from "firebase/auth"


//returns JWT
//needs to check username
//encrypt password
async function signUp(username: string, password: string, email: string){
    try {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        return {
            "success": true,
            "message": "successfully signed up",
            "uid": data.user.uid,
            "token": await data.user.getIdToken()
        }
    } catch(e: any) {
        return {
            "success": false,
            "message": e.message
        }
    }
}

//returns JWT
async function signIn(email: string, password: string){
    try {
        const data = await signInWithEmailAndPassword(auth, email, password);
        return {
            "success": true,
            "message": "successfully signed in",
            "uid": data.user.uid,
            "token": await data.user.getIdToken()   
        }
    } catch(e: any) {
        return {
            "success": false,
            "message": e.message
        }
    }
}


async function signOut(){
    try {
        const data = await signOutFB(auth)
        return {
            "success": true,
            "message": "successfully logged out"
        }
    } catch(e) {
        return {
            "success": false,
            "message": e
        }
    }
    
}

//requires JWT
//encrypt password
function resetPassword(){
    auth.currentUser
    return
}

function createUser(uid: string, username: string, email: string){
    
    return
}

//requires JWT
function deleteUser(){
    return
}

export {
    signUp,
    signIn,
    signOut,
    resetPassword
}