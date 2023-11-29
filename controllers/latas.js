const repositorio = require('../repositorios/latas.js')

const controller = {
    get: (req, res) => {
        res.send(repositorio.get())
    },
    getId: (req, res) => {
        const {id} = req.params

        const lata = repositorio.getId(id)

        if(lata.length == 0){
            res.status(204).send("Não foram encontrados dados")
        }else{
            res.send(lata)
        }
    },
    create: (req, res) => {
        const dados = req.body

        console.log("dados passados: " + dados)

        try{
            const createdLata = repositorio.create(dados)
            res.status(200).send(createdLata)

        } catch (err) {
            res.status(400).send(err.message)

        }
        
    },
    update: (req, res) => {
        const dados = req.body
        const {id} = req.params
        dados.id = id

        return res.send(repositorio.update(dados))
    },
    destroy: (req, res) => {
        const {id} = req.params

        repositorio.destroy(id)
        res.send()
    }
}

module.exports = controller