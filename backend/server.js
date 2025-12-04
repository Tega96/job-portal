import express from 'express'


const app = express() 
const PORT = 3300

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})