import express from 'express';
import logger from 'morgan';
import path from 'path';

const PORT = 2077;
const app = express();



app.listen(PORT,()=> {
    console.log(`Currently running on PORT ${PORT}`);
});