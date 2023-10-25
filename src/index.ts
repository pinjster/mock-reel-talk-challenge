import express from 'express';
import { firebase } from './firebase';
import { getAuth } from "firebase/auth";
import { signIn, signUp, signOut } from './auth';
import { collection, addDoc, getFirestore } from "firebase/firestore";

//node.js app setup
const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = 3000;

//firebase setup
export const auth = getAuth(firebase);
export const db = getFirestore();

 
//API routes
app.get('/', (_req, _res) => {
    _res.send("Mock Reel Talk Back End Server");
});

app.listen(port, () => {
    console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});

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

app.post('/api/signin', async (_req, _res) => {
    const data = await signIn(_req.body.email, _req.body.password);
    _res.status(data.success ? 200 : 400).json(data);
})

app.post('/api/signout', async (_req, _res) => {
    const data = await signOut();
    _res.status(data.success ? 200 : 400).json(data);
})

app.put('/api/updatePassword', async (_req, _res) => {
    return 
})

//test
app.delete('/api/:id', async (_req, _res) => {
    const id = _req.params.id
})

app.get('/api/test', async (_req, _res) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    _res.send('supper gret   job')
})
