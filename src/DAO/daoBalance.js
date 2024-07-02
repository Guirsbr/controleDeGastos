// src/DAO/BalanceDAO.js
import Balance from '../DTO/Balance.js';

class BalanceDAO {
    constructor() {
        this.balance = new Balance(0, 0); // Inicializando com saldo 0
    }

    addDinheiro(valor) {
        const novoSaldo = this.balance.getSaldoDisponivel() + valor;
        this.balance.setSaldoDisponivel(novoSaldo);
    }

    sairDinheiro(valor) {
        const novoSaldo = this.balance.getSaldoDisponivel() - valor;
        this.balance.setSaldoDisponivel(novoSaldo);
    }

    getSaldoDisponivel() {
        return this.balance.getSaldoDisponivel();
    }

    getSaldoBloqueado() {
        return this.balance.getSaldoBloqueado();
    }

    // Outros métodos relacionados ao saldo podem ser adicionados aqui
}

export default BalanceDAO;
