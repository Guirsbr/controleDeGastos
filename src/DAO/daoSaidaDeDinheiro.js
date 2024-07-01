
import BalanceDAO from './BalanceDAO.js';

class SaidaDeDinheiro {
    constructor(balanceDAO) {
        this.balanceDAO = balanceDAO;
    }

    removerDinheiro(valor) {
        this.balanceDAO.removerDinheiro(valor);
    }
}

export default SaidaDeDinheiro;
