import { Router } from 'express'

const rotas = Router()

rotas.get('/', (req, res) => {
    res.status(200).send({"message": "Hello World!"})
})

export default rotas