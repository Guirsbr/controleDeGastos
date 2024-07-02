// src/DAO/daoSaidaDeDinheiro.js
import BalanceDAO from './BalanceDAO.js';

class daoSaidaDeDinheiro {
    constructor() {
        this.balanceDAO = new BalanceDAO();
    }

    sairDinheiro(valor) {
        this.balanceDAO.sairDinheiro(valor);
    }
}

export default new daoSaidaDeDinheiro();
