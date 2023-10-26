import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "./index";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as signOutFB, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth"

//returns JWT
//needs to check username
//encrypt password
async function signUp(username: string, password: string, email: string){
    try {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        createUser(data.user.uid, username, email);
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


//needs encrypt password
function resetPassword(email: string){
    sendPasswordResetEmail(auth, email)
    return
}

function confirmResetPassword(oobCode: string, newPassword: string){
    confirmPasswordReset(auth, oobCode, newPassword)
}

async function createUser(uid: string, username: string, email: string){
    const newUser = {
        uid: uid,
        username: username,
        email: email,
        joined: Timestamp.now()
    }
    try {
        const docRef = await setDoc(doc(db, "users", username), newUser);
    } catch (e) {
        console.error("Error adding document: ", e);
    } 
    return
}


function deleteUser(){
    return
}

export {
    signUp,
    signIn,
    signOut,
    resetPassword
}