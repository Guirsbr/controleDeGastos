class CardInfo {
    constructor(numeroCartao, nomeTitular, dataValidade, bandeira) {
        this.numeroCartao = numeroCartao;
        this.nomeTitular = nomeTitular;
        this.dataValidade = dataValidade;
        this.bandeira = bandeira;
    }

    // Getters e Setters
    getNumeroCartao() {
        return this.numeroCartao;
    }

    setNumeroCartao(numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    getNomeTitular() {
        return this.nomeTitular;
    }

    setNomeTitular(nomeTitular) {
        this.nomeTitular = nomeTitular;
    }

    getDataValidade() {
        return this.dataValidade;
    }

    setDataValidade(dataValidade) {
        this.dataValidade = dataValidade;
    }

    getBandeira() {
        return this.bandeira;
    }

    setBandeira(bandeira) {
        this.bandeira = bandeira;
    }
}