import express from 'express';

const app = express();
app.use(express.json());

app.listen('3000', () => {
    console.log('Node is running on port 3000')
});

app.use('/todos', require('./routes/todos'))