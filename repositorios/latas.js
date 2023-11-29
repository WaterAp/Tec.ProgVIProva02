const latas = []
let last_id = 0


//const validador = require('../validacoes/latas.js')
const repositorio = {
    get: () => {
        return latas
    },
    getId: (id) => {
        return latas.filter(lata => lata.id == id)
    },
    create: (lata) => {  
        if(lata.descricao && lata.volume) {
            lata.id = ++last_id
            latas.push(lata)
            console.log(lata)
            
            return lata

        } else {
            throw new Error('Para criação de uma lata é necessario Descrição e Volume');

        }  
    },
    update: (dados) => {
        latas.forEach(lata => {
            if(lata.id == dados.id){
                lata = {
                    ...dados
                }
            }
        })

        return latas.filter(lata => lata.id == dados.id)
    },
    destroy: (id) => {
        const indice = latas.findIndex(lata => lata.id == id)

        if(indice != -1){
            latas.splice(indice, 1)
        }

        return true
    }
}

module.exports = repositorio