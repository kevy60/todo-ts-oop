import express from 'express'
import todoRoutes from './routes/todos'


const app = express()

app.use('/todos', todoRoutes)

app.listen(3011, () => {
    console.log('Server is started at http://localhost:3011')
})