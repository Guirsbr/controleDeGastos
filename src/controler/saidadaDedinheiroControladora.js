// src/Controllers/SaidaDeDinheiroController.js
import BalanceSaidaModel from '../Model/BalanceSaidaModel.js';

class SaidaDeDinheiroController {
    static sairDinheiro(valor) {
        const model = new BalanceSaidaModel();
        model.sairDinheiro(valor);
    }
}

export default SaidaDeDinheiroController;
