import { Router } from 'express'

const app = Router();

app.get('/', (req, res) => {
    res.write('opa');
    res.end();
})

export default app;