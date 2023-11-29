const validacoes = (lata) => {
    if(lata.descricao || lata.volume) {
        return true

    }

    return false
}

module.exports = validacoes