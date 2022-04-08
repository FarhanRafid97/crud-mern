import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/posts.js';
import { routerUsers } from './routes/users.js';

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use('/posts', router);
app.use('/users', routerUsers);

const CONNECT_URL =
  'mongodb+srv://farhanrafid97:farhanrafid97@cluster0.4xoaj.mongodb.net/databarang?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8000;
mongoose
  .connect(CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app berjalan di ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`${error} tidak mau onek`);
  });
