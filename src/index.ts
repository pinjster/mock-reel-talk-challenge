import express from 'express';
import { firebase } from './firebase';
import { getAuth } from "firebase/auth";
import { signIn, signUp, signOut, resetPassword } from './auth';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getMovies } from './reel';

//node.js app setup
const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = 3000;

//firebase setup
export const auth = getAuth(firebase);
export const db = getFirestore();

 
//API routes
//test route
app.get('/', (_req, _res) => {
    _res.send("Mock Reel Talk Back End Server");
});

//test route
app.listen(port, () => {
    console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});

//signs up user
app.post('/api/signup', async (_req, _res) => {
    if(!_req.body.password || !_req.body.username || !_req.body.email){
        return _res.status(400).json({
            "success": false,
            "message": "invalid empty input"
        })
    }
    const data = await signUp(_req.body.username, _req.body.password, _req.body.email);
    _res.status(data.success ? 200 : 400).json(data);
})

//signs in user
app.post('/api/signin', async (_req, _res) => {
    const data = await signIn(_req.body.email, _req.body.password);
    _res.status(data.success ? 200 : 400).json(data);
})

//signs user out
app.post('/api/signout', async (_req, _res) => {
    const data = await signOut();
    _res.status(data.success ? 200 : 400).json(data);
})

//sends reset password email
app.get('/api/updatePassword', async (_req, _res) => {
    const email = await _req.body.email
    resetPassword(email)
})




//API call for TMDB movies
app.post('/api/getmovies', async (_req, _res) => {
    const data = await getMovies()
    _res.status(data.success ? 200 : 400).json(data)
})
