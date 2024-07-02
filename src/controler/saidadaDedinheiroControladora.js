import daoAddDinheiro from src/DAO/daoAddDinheiro.js;
import daoSaidaDeDinhiro from /.src/DAo/daSaidaDeDinhiro.js;
import { getSaldo, removeSaldo } from './addDinheiroCntroler';

// src/DAO/daSaidaDeDinheiro.js
import SaldoManager from './SaldoManager.js';

class SaidaDeDinheiro {
    static removerDinheiro(valor) {
        if (valor <= SaldoManager.getSaldo()) {
            SaldoManager.atualizarSaldo(-valor);
            // Aqui você pode adicionar lógica para interagir com daSaidaDeDinheiro, se necessário
        } else {
            console.log("Saldo insuficiente para esta operação.");
        }
    }
}

export default SaidaDeDinheiro;
