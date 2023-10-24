import express from 'express';

const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
 
const port: number = 3000;

app.get('/', (_req, _res) => {
    _res.send("Mock Reel Talk Back End Server");
});

app.post('/api/customers', (_req, _res) => {
    _res.send('This is a post that is cool')
})

app.listen(port, () => {
    console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});


