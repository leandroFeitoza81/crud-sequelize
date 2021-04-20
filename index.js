const express = require('express')
const app = express()

const bookController = require('./controllers/bookController');

const PORT = 3000

app.use(express.json());

app.use('/books', bookController)

app.listen(PORT, () => console.log(`Server rodando na porta -> ${PORT}!!!`))