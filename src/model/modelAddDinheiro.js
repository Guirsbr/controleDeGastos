// src/Model/BalanceModel.js
import AddDinheiroController from '../Controllers/AddDinheiroController.js';
import BalanceDAO from '../DAO/BalanceDAO.js';
import Balance from '../DTO/Balance.js';

class BalanceModel {
    constructor() {
        this.balanceDAO = new BalanceDAO();
    }

    addDinheiro(valor) {
        this.balanceDAO.addDinheiro(valor);
    }

    getSaldoDisponivel() {
        return this.balanceDAO.getSaldoDisponivel();
    }

    getSaldoBloqueado() {
        return this.balanceDAO.getSaldoBloqueado();
    }

    // Outros métodos de negócio podem ser adicionados aqui
}

export default BalanceModel;
