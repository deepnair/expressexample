import express from 'express';
import {v4 as uuid} from 'uuid';

const checkAuth = require('../middleware/checkAuth');

const router = express.Router()

interface TodoType{
    id: string;
    title: string;
    completed: boolean;
}

let todos:TodoType[] = []

router.get('', checkAuth, (req:express.Request, res:express.Response) => {
    res.status(200).json(todos);
})

router.post('', checkAuth, (req:express.Request, res:express.Response) => {
    const {title} = req.body
    const newToDo = {
        id: uuid(),
        title: title,
        completed: false
    }
    todos.push(newToDo);
    res.json(newToDo);
})

router.get('/:id', checkAuth, (req:express.Request, res:express.Response) => {
    const {id} = req.params;
    const currentToDo = todos.find(todo => todo.id === id)
    res.json(currentToDo);
})

router.put('/:id', checkAuth, (req:express.Request, res:express.Response) => {
    const {id} = req.params;
    const newToDoIndex = todos.findIndex(todo => todo.id === id);
    console.log(newToDoIndex)
    todos[newToDoIndex].completed = !todos[newToDoIndex].completed;
    console.log(todos[newToDoIndex])
    res.json(todos[newToDoIndex]);
})

router.delete('/:id', checkAuth, (req:express.Request, res:express.Response) => {
    const {id} = req.params;
    todos = todos.filter(todo => todo.id !== id)
    res.json(todos);
})

module.exports = router


