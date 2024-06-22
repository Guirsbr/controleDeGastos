class Balance {
    constructor(saldoDisponivel, saldoBloqueado) {
        this.saldoDisponivel = saldoDisponivel;
        this.saldoBloqueado = saldoBloqueado;
    }

    // Getters e Setters
    getSaldoDisponivel() {
        return this.saldoDisponivel;
    }

    setSaldoDisponivel(saldoDisponivel) {
        this.saldoDisponivel = saldoDisponivel;
    }

    getSaldoBloqueado() {
        return this.saldoBloqueado;
    }

    setSaldoBloqueado(saldoBloqueado) {
        this.saldoBloqueado = saldoBloqueado;
    }
}