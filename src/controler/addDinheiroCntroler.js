import daoAddDinheiro from 'src/DAO/daoAddDinheiro.js';
import daoSaidaDeDinheiro from 'src/DAO/daoSaidaDeDinheiro.js';

class AddDinheiroController {
    static addDinheiro(valor) {
        daoAddDinheiro.addDinheiro(valor);
    }
}

export default AddDinheiroController;
