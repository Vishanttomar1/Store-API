const express = require('express');
const app = express(); 
const connectionDB = require('./DB/controller')
const productsRouter= require('./routes/products')
//async errors
const notFoundMiddleware = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error-handler')

//middlewares 
app.use(express.json())

//routes
app.get('/' ,(req,res)=>{
res.send('<h1> store api </h1> <a href="api/v1/products"> products route </a>')
})

app.use('/api/v1/products', productsRouter)
//product route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = 5050;
app.listen(port, console.log(`server is listining on port ${port}`));
