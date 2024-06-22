class Transaction {
    constructor(dataHora, descricao, valor, tipo) {
        this.dataHora = dataHora;
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = tipo; // crédito ou débito
    }

    // Getters e Setters
    getDataHora() {
        return this.dataHora;
    }

    setDataHora(dataHora) {
        this.dataHora = dataHora;
    }

    getDescricao() {
        return this.descricao;
    }

    setDescricao(descricao) {
        this.descricao = descricao;
    }

    getValor() {
        return this.valor;
    }

    setValor(valor) {
        this.valor = valor;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }
}