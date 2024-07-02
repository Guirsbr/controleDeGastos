import BalanceDAO from './BalanceDAO.js';

class daoAddDinheiro {
    constructor() {
        this.balanceDAO = new BalanceDAO();
    }

    addDinheiro(valor) {
        this.balanceDAO.addDinheiro(valor);
    }
}

export default new daoAddDinheiro();
