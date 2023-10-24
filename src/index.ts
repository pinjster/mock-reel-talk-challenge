import express from 'express';
import { firebase } from './firebase';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { signIn, signUp, signOut } from './auth';

const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const db = getFirestore(firebase);
export const auth = getAuth(firebase);

 
const port: number = 3000;

app.get('/', (_req, _res) => {
    _res.send("Mock Reel Talk Back End Server");
});

app.listen(port, () => {
    console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});

app.post('/api/signup', async (_req, _res) => {
    if(!_req.body.password || !_req.body.username || !_req.body.email){
        return _res.status(400).send({
            "success": false,
            "message": "invalid empty input"
        })
    }
    const data = await signUp(_req.body.username, _req.body.password, _req.body.email);
    _res.status(data.success ? 200 : 400).send(data);
})

app.post('/api/signin', async (_req, _res) => {
    const data = await signIn(_req.body.email, _req.body.password);
    _res.status(data.success ? 200 : 400).send(data);
})

app.post('/api/signout', async (_req, _res) => {
    const data = await signOut();
    _res.status(data.success ? 200 : 400).send(data);
})
