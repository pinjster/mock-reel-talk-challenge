import { db } from "./index";
import { addDoc, collection, doc, increment, setDoc, Timestamp } from "firebase/firestore"; 


async function post(body: string, author: string){
    try {
        const post = await setDoc(doc(db, "posts"), {
            body: body,
            author: author,
            posted: Timestamp.now()
        })
        return {
            "success": true,
            //return post ID
        }
    } catch (e) {
        return {
            "success": false,
            "message": "successfully posted"
        }
    }
}

function likePost(postID: string){
    try {
        setDoc(doc(db, "posts", postID, "likes"), {
            count: increment(1)
            //add usernames
        })
        return {
            "success": true,
            "message": "successfully liked post"
        }
    } catch (e) {
        return {
            "success": false,
            "message": "could not like"
        }
    }
}