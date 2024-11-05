import express from "express"
import messageRoute from './routes/messageAPI'
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json());

app.use('/message', messageRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});