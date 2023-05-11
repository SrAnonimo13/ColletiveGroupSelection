import { config } from 'dotenv';
import * as express from 'express';

import routers from './routes';

config();
const PORT = process.env.PORT;
const DEV = process.env.DEV;

const app = express();

app.use(express.json());

app.use('/api', routers);

app.listen(PORT, () => {if(!DEV)return;console.log(`Server listen in: http://localhost:${PORT}`)});