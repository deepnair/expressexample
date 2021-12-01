## Express REST API example
This is based on [Express JS (Node REST API) Crash Course](https://www.youtube.com/watch?v=P5q8rUGCN9k) by Laith Harb except this is done in Typescript.

1. Create a folder for the express REST API:
    ```
    mkdir expressexample
    ```
1. cd into the folder and then make a package json to start things off by doing:
    ```
    npm init -y
    ```
1. Make sure typescript is installed globally so you could run typescript's tsc command.
    ```
    npm i typescript -g
    ```
1. Install Typescript and tslint as developer dependencies
    ```
    npm i -D typescript tslint
    ```
1. Install express and then the express types
    ```
    npm i -S express
    npm i -D @types/express
1. Ensure that nodemon is installed globally so you could run node that's updated on every save. Also install tsnode so that you can run nodemon with typescript.
    ```
    npm i nodemon -g
    npm i -D ts-node
    ```
1. Create a start script in package.json with nodemon index.ts
1. Create an index.ts file.
1. In this file import express as express.
1. Create a const app = express();
1. Create an app.listen function with the port mentioned.
1. Create a app.use(express.json());
1. Create an array called todos to represent the todos. Also create a type for it.
1. Create a get function that just res.json(todos).
1. The types of the request are express.Request, the response is express.Response.
1. Create a post function that uses the data from req.body.title to create the new object to be added, and pushes it into the array. Then res.json() the newly added object.
1. You'll need to npm i uuid and npm i -D @types/uuid to generate the unique id for each of the objects.
1. Create a get to return each individual object with the 
    ```
    app.get('/todos/:id', () => {

    })
    ```
    To get the id using req.params.id which can be destructured as 
    ```
    const {id} = req.params; 
    ```
    Or params could also be earlier destructured out of req.
1. In order to get the invidual objects use the find arrayfunction which returns the one entry in the array that you want.
1. Create the put function to update the completed boolean using the same req.params.id setup, just this time use the findindex to find the correct index to update.
1. Create a delete function, that uses filter to return the array without the object in question.
1. All these can be tested with the Thunder Client VS code extension without Postman required.
1. Create a routes folder. Cut out all the functions except the app.listen and move it to a file called todos.ts in the routes folder. 
1. At the top of the routes folder import express from 'express' and also bring in {v4 as uuid} from uuid. Then do:
    ```
    const router = express.Router();
    ```
    At the bottom of the page do:
    ```
    module.exports = router;
1. In the index.ts add:
    ```
    app.use('/todos', require('../routes/todos.ts'));
    ```
1. Then you can go back to the todos.ts and chanage all the apps to router and change all the /todos in the functions to just nothing.
1. Finally to add a sample authentication middleware, create a middleware folder with a checkAuth.js file.
1. This has an import of express from 'express' and the following code:
    ```
    module.exports = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const {authenticated} = req.headers;
    authenticated === 'yes' ? next() : res.status(403).json({msg: "You are not authenticated."})
    }
1. Then in the todos.ts between the address after get or the other methods, put in checkAuth after bringing it as const checkAuth = require('../middleware/checkAuth). This will only allow the users to proceed if they're mock authenticated.
